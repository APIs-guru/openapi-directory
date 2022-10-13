package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEndpointGroupXAmzTargetEnum string

const (
	DeleteEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DeleteEndpointGroup DeleteEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteEndpointGroup"
)

type DeleteEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEndpointGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
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
