package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomRoutingListenerXAmzTargetEnum string

const (
	DeleteCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingListener DeleteCustomRoutingListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteCustomRoutingListener"
)

type DeleteCustomRoutingListenerHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomRoutingListenerXAmzTargetEnum `header:"name=X-Amz-Target"`
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
