package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodegroupConfigPathParams struct {
	Name          string `pathParam:"style=simple,explode=false,name=name"`
	NodegroupName string `pathParam:"style=simple,explode=false,name=nodegroupName"`
}

type UpdateNodegroupConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateNodegroupConfigRequestBodyLabels
// An object representing a Kubernetes label change for a managed node group.
type UpdateNodegroupConfigRequestBodyLabels struct {
	AddOrUpdateLabels map[string]string `json:"addOrUpdateLabels,omitempty"`
	RemoveLabels      []string          `json:"removeLabels,omitempty"`
}

// UpdateNodegroupConfigRequestBodyScalingConfig
// An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
type UpdateNodegroupConfigRequestBodyScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize,omitempty"`
	MaxSize     *int64 `json:"maxSize,omitempty"`
	MinSize     *int64 `json:"minSize,omitempty"`
}

// UpdateNodegroupConfigRequestBodyTaints
// An object representing the details of an update to a taints payload.
type UpdateNodegroupConfigRequestBodyTaints struct {
	AddOrUpdateTaints []shared.Taint `json:"addOrUpdateTaints,omitempty"`
	RemoveTaints      []shared.Taint `json:"removeTaints,omitempty"`
}

// UpdateNodegroupConfigRequestBodyUpdateConfig
// The node group update configuration.
type UpdateNodegroupConfigRequestBodyUpdateConfig struct {
	MaxUnavailable           *int64 `json:"maxUnavailable,omitempty"`
	MaxUnavailablePercentage *int64 `json:"maxUnavailablePercentage,omitempty"`
}

type UpdateNodegroupConfigRequestBody struct {
	ClientRequestToken *string                                        `json:"clientRequestToken,omitempty"`
	Labels             *UpdateNodegroupConfigRequestBodyLabels        `json:"labels,omitempty"`
	ScalingConfig      *UpdateNodegroupConfigRequestBodyScalingConfig `json:"scalingConfig,omitempty"`
	Taints             *UpdateNodegroupConfigRequestBodyTaints        `json:"taints,omitempty"`
	UpdateConfig       *UpdateNodegroupConfigRequestBodyUpdateConfig  `json:"updateConfig,omitempty"`
}

type UpdateNodegroupConfigRequest struct {
	PathParams UpdateNodegroupConfigPathParams
	Headers    UpdateNodegroupConfigHeaders
	Request    UpdateNodegroupConfigRequestBody `request:"mediaType=application/json"`
}

type UpdateNodegroupConfigResponse struct {
	ClientException               *interface{}
	ContentType                   string
	InvalidParameterException     *interface{}
	InvalidRequestException       *interface{}
	ResourceInUseException        *interface{}
	ResourceNotFoundException     *interface{}
	ServerException               *interface{}
	StatusCode                    int64
	UpdateNodegroupConfigResponse *shared.UpdateNodegroupConfigResponse
}
