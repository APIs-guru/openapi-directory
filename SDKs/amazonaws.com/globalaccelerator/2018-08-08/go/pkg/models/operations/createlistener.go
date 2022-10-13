package operations

import (
	"openapi/pkg/models/shared"
)

type CreateListenerXAmzTargetEnum string

const (
	CreateListenerXAmzTargetEnumGlobalAcceleratorV20180706CreateListener CreateListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateListener"
)

type CreateListenerHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateListenerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateListenerRequest struct {
	Headers CreateListenerHeaders
	Request shared.CreateListenerRequest `request:"mediaType=application/json"`
}

type CreateListenerResponse struct {
	AcceleratorNotFoundException  *interface{}
	ContentType                   string
	CreateListenerResponse        *shared.CreateListenerResponse
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	InvalidPortRangeException     *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
}
