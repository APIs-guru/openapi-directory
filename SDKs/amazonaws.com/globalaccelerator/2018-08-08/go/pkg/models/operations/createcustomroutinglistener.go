package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomRoutingListenerXAmzTargetEnum string

const (
	CreateCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingListener CreateCustomRoutingListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateCustomRoutingListener"
)

type CreateCustomRoutingListenerHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCustomRoutingListenerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCustomRoutingListenerRequest struct {
	Headers CreateCustomRoutingListenerHeaders
	Request shared.CreateCustomRoutingListenerRequest `request:"mediaType=application/json"`
}

type CreateCustomRoutingListenerResponse struct {
	AcceleratorNotFoundException        *interface{}
	ContentType                         string
	CreateCustomRoutingListenerResponse *shared.CreateCustomRoutingListenerResponse
	InternalServiceErrorException       *interface{}
	InvalidArgumentException            *interface{}
	InvalidPortRangeException           *interface{}
	LimitExceededException              *interface{}
	StatusCode                          int64
}
