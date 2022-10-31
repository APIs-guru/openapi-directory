package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAcceleratorXAmzTargetEnum string

const (
	DeleteAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DeleteAccelerator DeleteAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteAccelerator"
)

type DeleteAcceleratorHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
