package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodegroupConfigPathParams struct {
	Name          string `pathParam:"style=simple,explode=false,name=name"`
	NodegroupName string `pathParam:"style=simple,explode=false,name=nodegroupName"`
}

type UpdateNodegroupConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateNodegroupConfigRequestBodyLabels struct {
	AddOrUpdateLabels map[string]string `json:"addOrUpdateLabels"`
	RemoveLabels      []string          `json:"removeLabels"`
}

type UpdateNodegroupConfigRequestBodyScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize"`
	MaxSize     *int64 `json:"maxSize"`
	MinSize     *int64 `json:"minSize"`
}

type UpdateNodegroupConfigRequestBodyTaints struct {
	AddOrUpdateTaints []shared.Taint `json:"addOrUpdateTaints"`
	RemoveTaints      []shared.Taint `json:"removeTaints"`
}

type UpdateNodegroupConfigRequestBodyUpdateConfig struct {
	MaxUnavailable           *int64 `json:"maxUnavailable"`
	MaxUnavailablePercentage *int64 `json:"maxUnavailablePercentage"`
}

type UpdateNodegroupConfigRequestBody struct {
	ClientRequestToken *string                                        `json:"clientRequestToken"`
	Labels             *UpdateNodegroupConfigRequestBodyLabels        `json:"labels"`
	ScalingConfig      *UpdateNodegroupConfigRequestBodyScalingConfig `json:"scalingConfig"`
	Taints             *UpdateNodegroupConfigRequestBodyTaints        `json:"taints"`
	UpdateConfig       *UpdateNodegroupConfigRequestBodyUpdateConfig  `json:"updateConfig"`
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
