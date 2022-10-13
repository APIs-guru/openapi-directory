package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEndpointGroupXAmzTargetEnum string

const (
	CreateEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706CreateEndpointGroup CreateEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateEndpointGroup"
)

type CreateEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEndpointGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEndpointGroupRequest struct {
	Headers CreateEndpointGroupHeaders
	Request shared.CreateEndpointGroupRequest `request:"mediaType=application/json"`
}

type CreateEndpointGroupResponse struct {
	AcceleratorNotFoundException        *interface{}
	AccessDeniedException               *interface{}
	ContentType                         string
	CreateEndpointGroupResponse         *shared.CreateEndpointGroupResponse
	EndpointGroupAlreadyExistsException *interface{}
	InternalServiceErrorException       *interface{}
	InvalidArgumentException            *interface{}
	LimitExceededException              *interface{}
	ListenerNotFoundException           *interface{}
	StatusCode                          int64
}
