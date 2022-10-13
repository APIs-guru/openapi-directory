package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomRoutingEndpointGroupXAmzTargetEnum string

const (
	CreateCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup CreateCustomRoutingEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup"
)

type CreateCustomRoutingEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCustomRoutingEndpointGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCustomRoutingEndpointGroupRequest struct {
	Headers CreateCustomRoutingEndpointGroupHeaders
	Request shared.CreateCustomRoutingEndpointGroupRequest `request:"mediaType=application/json"`
}

type CreateCustomRoutingEndpointGroupResponse struct {
	AcceleratorNotFoundException             *interface{}
	AccessDeniedException                    *interface{}
	ContentType                              string
	CreateCustomRoutingEndpointGroupResponse *shared.CreateCustomRoutingEndpointGroupResponse
	EndpointGroupAlreadyExistsException      *interface{}
	InternalServiceErrorException            *interface{}
	InvalidArgumentException                 *interface{}
	InvalidPortRangeException                *interface{}
	LimitExceededException                   *interface{}
	ListenerNotFoundException                *interface{}
	StatusCode                               int64
}
