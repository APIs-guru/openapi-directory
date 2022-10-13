package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAcceleratorAttributesXAmzTargetEnum string

const (
	UpdateAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706UpdateAcceleratorAttributes UpdateAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes"
)

type UpdateAcceleratorAttributesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAcceleratorAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAcceleratorAttributesRequest struct {
	Headers UpdateAcceleratorAttributesHeaders
	Request shared.UpdateAcceleratorAttributesRequest `request:"mediaType=application/json"`
}

type UpdateAcceleratorAttributesResponse struct {
	AcceleratorNotFoundException        *interface{}
	AccessDeniedException               *interface{}
	ContentType                         string
	InternalServiceErrorException       *interface{}
	InvalidArgumentException            *interface{}
	StatusCode                          int64
	UpdateAcceleratorAttributesResponse *shared.UpdateAcceleratorAttributesResponse
}
