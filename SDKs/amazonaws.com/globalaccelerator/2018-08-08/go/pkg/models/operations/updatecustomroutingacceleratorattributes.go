package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum string

const (
	UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"
)

type UpdateCustomRoutingAcceleratorAttributesHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCustomRoutingAcceleratorAttributesRequest struct {
	Headers UpdateCustomRoutingAcceleratorAttributesHeaders
	Request shared.UpdateCustomRoutingAcceleratorAttributesRequest `request:"mediaType=application/json"`
}

type UpdateCustomRoutingAcceleratorAttributesResponse struct {
	AcceleratorNotFoundException                     *interface{}
	AccessDeniedException                            *interface{}
	ContentType                                      string
	InternalServiceErrorException                    *interface{}
	InvalidArgumentException                         *interface{}
	StatusCode                                       int64
	UpdateCustomRoutingAcceleratorAttributesResponse *shared.UpdateCustomRoutingAcceleratorAttributesResponse
}
