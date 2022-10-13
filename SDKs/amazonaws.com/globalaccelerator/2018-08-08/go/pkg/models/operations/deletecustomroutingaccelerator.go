package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomRoutingAcceleratorXAmzTargetEnum string

const (
	DeleteCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingAccelerator DeleteCustomRoutingAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator"
)

type DeleteCustomRoutingAcceleratorHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomRoutingAcceleratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCustomRoutingAcceleratorRequest struct {
	Headers DeleteCustomRoutingAcceleratorHeaders
	Request shared.DeleteCustomRoutingAcceleratorRequest `request:"mediaType=application/json"`
}

type DeleteCustomRoutingAcceleratorResponse struct {
	AcceleratorNotDisabledException  *interface{}
	AcceleratorNotFoundException     *interface{}
	AssociatedListenerFoundException *interface{}
	ContentType                      string
	InternalServiceErrorException    *interface{}
	InvalidArgumentException         *interface{}
	StatusCode                       int64
}
