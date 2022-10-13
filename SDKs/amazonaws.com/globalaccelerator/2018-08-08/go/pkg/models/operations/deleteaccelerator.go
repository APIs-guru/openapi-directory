package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAcceleratorXAmzTargetEnum string

const (
	DeleteAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DeleteAccelerator DeleteAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteAccelerator"
)

type DeleteAcceleratorHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAcceleratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAcceleratorRequest struct {
	Headers DeleteAcceleratorHeaders
	Request shared.DeleteAcceleratorRequest `request:"mediaType=application/json"`
}

type DeleteAcceleratorResponse struct {
	AcceleratorNotDisabledException  *interface{}
	AcceleratorNotFoundException     *interface{}
	AssociatedListenerFoundException *interface{}
	ContentType                      string
	InternalServiceErrorException    *interface{}
	InvalidArgumentException         *interface{}
	StatusCode                       int64
}
