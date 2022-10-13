package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateClusterRequestBodyKubernetesNetworkConfig struct {
	ServiceIpv4Cidr *string `json:"serviceIpv4Cidr"`
}

type CreateClusterRequestBodyLogging struct {
	ClusterLogging []shared.LogSetup `json:"clusterLogging"`
}

type CreateClusterRequestBodyResourcesVpcConfig struct {
	EndpointPrivateAccess *bool    `json:"endpointPrivateAccess"`
	EndpointPublicAccess  *bool    `json:"endpointPublicAccess"`
	PublicAccessCidrs     []string `json:"publicAccessCidrs"`
	SecurityGroupIds      []string `json:"securityGroupIds"`
	SubnetIds             []string `json:"subnetIds"`
}

type CreateClusterRequestBody struct {
	ClientRequestToken      *string                                          `json:"clientRequestToken"`
	EncryptionConfig        []shared.EncryptionConfig                        `json:"encryptionConfig"`
	KubernetesNetworkConfig *CreateClusterRequestBodyKubernetesNetworkConfig `json:"kubernetesNetworkConfig"`
	Logging                 *CreateClusterRequestBodyLogging                 `json:"logging"`
	Name                    string                                           `json:"name"`
	ResourcesVpcConfig      CreateClusterRequestBodyResourcesVpcConfig       `json:"resourcesVpcConfig"`
	RoleArn                 string                                           `json:"roleArn"`
	Tags                    map[string]string                                `json:"tags"`
	Version                 *string                                          `json:"version"`
}

type CreateClusterRequest struct {
	Headers CreateClusterHeaders
	Request CreateClusterRequestBody `request:"mediaType=application/json"`
}

type CreateClusterResponse struct {
	ClientException                      *interface{}
	ContentType                          string
	CreateClusterResponse                *shared.CreateClusterResponse
	InvalidParameterException            *interface{}
	ResourceInUseException               *interface{}
	ResourceLimitExceededException       *interface{}
	ServerException                      *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UnsupportedAvailabilityZoneException *interface{}
}
