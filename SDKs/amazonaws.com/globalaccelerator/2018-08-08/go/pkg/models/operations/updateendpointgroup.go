package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointGroupXAmzTargetEnum string

const (
	UpdateEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706UpdateEndpointGroup UpdateEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateEndpointGroup"
)

type UpdateEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEndpointGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEndpointGroupRequest struct {
	Headers UpdateEndpointGroupHeaders
	Request shared.UpdateEndpointGroupRequest `request:"mediaType=application/json"`
}

type UpdateEndpointGroupResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	EndpointGroupNotFoundException *interface{}
	InternalServiceErrorException  *interface{}
	InvalidArgumentException       *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
	UpdateEndpointGroupResponse    *shared.UpdateEndpointGroupResponse
}
