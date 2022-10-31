package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomRoutingEndpointGroupXAmzTargetEnum string

const (
	DeleteCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup DeleteCustomRoutingEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup"
)

type DeleteCustomRoutingEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomRoutingEndpointGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteCustomRoutingEndpointGroupRequest struct {
	Headers DeleteCustomRoutingEndpointGroupHeaders
	Request shared.DeleteCustomRoutingEndpointGroupRequest `request:"mediaType=application/json"`
}

type DeleteCustomRoutingEndpointGroupResponse struct {
	ContentType                    string
	EndpointGroupNotFoundException *interface{}
	InternalServiceErrorException  *interface{}
	InvalidArgumentException       *interface{}
	StatusCode                     int64
}
