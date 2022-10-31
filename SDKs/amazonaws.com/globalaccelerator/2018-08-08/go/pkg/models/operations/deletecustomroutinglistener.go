package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomRoutingListenerXAmzTargetEnum string

const (
	DeleteCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingListener DeleteCustomRoutingListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteCustomRoutingListener"
)

type DeleteCustomRoutingListenerHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomRoutingListenerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteCustomRoutingListenerRequest struct {
	Headers DeleteCustomRoutingListenerHeaders
	Request shared.DeleteCustomRoutingListenerRequest `request:"mediaType=application/json"`
}

type DeleteCustomRoutingListenerResponse struct {
	AssociatedEndpointGroupFoundException *interface{}
	ContentType                           string
	InternalServiceErrorException         *interface{}
	InvalidArgumentException              *interface{}
	ListenerNotFoundException             *interface{}
	StatusCode                            int64
}
