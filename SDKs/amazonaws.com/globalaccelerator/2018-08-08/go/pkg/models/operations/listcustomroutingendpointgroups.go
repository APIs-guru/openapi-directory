package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomRoutingEndpointGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCustomRoutingEndpointGroupsXAmzTargetEnum string

const (
	ListCustomRoutingEndpointGroupsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingEndpointGroups ListCustomRoutingEndpointGroupsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups"
)

type ListCustomRoutingEndpointGroupsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCustomRoutingEndpointGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCustomRoutingEndpointGroupsRequest struct {
	QueryParams ListCustomRoutingEndpointGroupsQueryParams
	Headers     ListCustomRoutingEndpointGroupsHeaders
	Request     shared.ListCustomRoutingEndpointGroupsRequest `request:"mediaType=application/json"`
}

type ListCustomRoutingEndpointGroupsResponse struct {
	ContentType                             string
	InternalServiceErrorException           *interface{}
	InvalidArgumentException                *interface{}
	InvalidNextTokenException               *interface{}
	ListCustomRoutingEndpointGroupsResponse *shared.ListCustomRoutingEndpointGroupsResponse
	ListenerNotFoundException               *interface{}
	StatusCode                              int64
}
