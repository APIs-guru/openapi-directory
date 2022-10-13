package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomRoutingListenerXAmzTargetEnum string

const (
	UpdateCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingListener UpdateCustomRoutingListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateCustomRoutingListener"
)

type UpdateCustomRoutingListenerHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCustomRoutingListenerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCustomRoutingListenerRequest struct {
	Headers UpdateCustomRoutingListenerHeaders
	Request shared.UpdateCustomRoutingListenerRequest `request:"mediaType=application/json"`
}

type UpdateCustomRoutingListenerResponse struct {
	ContentType                         string
	InternalServiceErrorException       *interface{}
	InvalidArgumentException            *interface{}
	InvalidPortRangeException           *interface{}
	LimitExceededException              *interface{}
	ListenerNotFoundException           *interface{}
	StatusCode                          int64
	UpdateCustomRoutingListenerResponse *shared.UpdateCustomRoutingListenerResponse
}
