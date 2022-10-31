package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomRoutingEndpointGroupXAmzTargetEnum string

const (
	CreateCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup CreateCustomRoutingEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup"
)

type CreateCustomRoutingEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCustomRoutingEndpointGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
