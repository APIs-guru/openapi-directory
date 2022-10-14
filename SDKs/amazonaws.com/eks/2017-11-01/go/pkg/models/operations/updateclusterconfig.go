package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClusterConfigPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateClusterConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateClusterConfigRequestBodyLogging struct {
	ClusterLogging []shared.LogSetup `json:"clusterLogging,omitempty"`
}

type UpdateClusterConfigRequestBodyResourcesVpcConfig struct {
	EndpointPrivateAccess *bool    `json:"endpointPrivateAccess,omitempty"`
	EndpointPublicAccess  *bool    `json:"endpointPublicAccess,omitempty"`
	PublicAccessCidrs     []string `json:"publicAccessCidrs,omitempty"`
	SecurityGroupIds      []string `json:"securityGroupIds,omitempty"`
	SubnetIds             []string `json:"subnetIds,omitempty"`
}

type UpdateClusterConfigRequestBody struct {
	ClientRequestToken *string                                           `json:"clientRequestToken,omitempty"`
	Logging            *UpdateClusterConfigRequestBodyLogging            `json:"logging,omitempty"`
	ResourcesVpcConfig *UpdateClusterConfigRequestBodyResourcesVpcConfig `json:"resourcesVpcConfig,omitempty"`
}

type UpdateClusterConfigRequest struct {
	PathParams UpdateClusterConfigPathParams
	Headers    UpdateClusterConfigHeaders
	Request    UpdateClusterConfigRequestBody `request:"mediaType=application/json"`
}

type UpdateClusterConfigResponse struct {
	ClientException             *interface{}
	ContentType                 string
	InvalidParameterException   *interface{}
	InvalidRequestException     *interface{}
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	ServerException             *interface{}
	StatusCode                  int64
	UpdateClusterConfigResponse *shared.UpdateClusterConfigResponse
}
