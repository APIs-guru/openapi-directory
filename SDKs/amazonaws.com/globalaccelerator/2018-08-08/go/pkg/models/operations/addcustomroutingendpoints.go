package operations

import (
	"openapi/pkg/models/shared"
)

type AddCustomRoutingEndpointsXAmzTargetEnum string

const (
	AddCustomRoutingEndpointsXAmzTargetEnumGlobalAcceleratorV20180706AddCustomRoutingEndpoints AddCustomRoutingEndpointsXAmzTargetEnum = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints"
)

type AddCustomRoutingEndpointsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddCustomRoutingEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddCustomRoutingEndpointsRequest struct {
	Headers AddCustomRoutingEndpointsHeaders
	Request shared.AddCustomRoutingEndpointsRequest `request:"mediaType=application/json"`
}

type AddCustomRoutingEndpointsResponse struct {
	AccessDeniedException             *interface{}
	AddCustomRoutingEndpointsResponse *shared.AddCustomRoutingEndpointsResponse
	ConflictException                 *interface{}
	ContentType                       string
	EndpointAlreadyExistsException    *interface{}
	EndpointGroupNotFoundException    *interface{}
	InternalServiceErrorException     *interface{}
	InvalidArgumentException          *interface{}
	LimitExceededException            *interface{}
	StatusCode                        int64
}
