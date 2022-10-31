package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveCustomRoutingEndpointsXAmzTargetEnum string

const (
	RemoveCustomRoutingEndpointsXAmzTargetEnumGlobalAcceleratorV20180706RemoveCustomRoutingEndpoints RemoveCustomRoutingEndpointsXAmzTargetEnum = "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints"
)

type RemoveCustomRoutingEndpointsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveCustomRoutingEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RemoveCustomRoutingEndpointsRequest struct {
	Headers RemoveCustomRoutingEndpointsHeaders
	Request shared.RemoveCustomRoutingEndpointsRequest `request:"mediaType=application/json"`
}

type RemoveCustomRoutingEndpointsResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	EndpointGroupNotFoundException *interface{}
	EndpointNotFoundException      *interface{}
	InternalServiceErrorException  *interface{}
	InvalidArgumentException       *interface{}
	StatusCode                     int64
}
