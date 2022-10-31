package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEndpointGroupXAmzTargetEnum string

const (
	DeleteEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DeleteEndpointGroup DeleteEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteEndpointGroup"
)

type DeleteEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEndpointGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteEndpointGroupRequest struct {
	Headers DeleteEndpointGroupHeaders
	Request shared.DeleteEndpointGroupRequest `request:"mediaType=application/json"`
}

type DeleteEndpointGroupResponse struct {
	ContentType                    string
	EndpointGroupNotFoundException *interface{}
	InternalServiceErrorException  *interface{}
	InvalidArgumentException       *interface{}
	StatusCode                     int64
}
