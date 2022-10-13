package operations

import (
	"openapi/pkg/models/shared"
)

type ListEndpointGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEndpointGroupsXAmzTargetEnum string

const (
	ListEndpointGroupsXAmzTargetEnumGlobalAcceleratorV20180706ListEndpointGroups ListEndpointGroupsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListEndpointGroups"
)

type ListEndpointGroupsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEndpointGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEndpointGroupsRequest struct {
	QueryParams ListEndpointGroupsQueryParams
	Headers     ListEndpointGroupsHeaders
	Request     shared.ListEndpointGroupsRequest `request:"mediaType=application/json"`
}

type ListEndpointGroupsResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	InvalidNextTokenException     *interface{}
	ListEndpointGroupsResponse    *shared.ListEndpointGroupsResponse
	ListenerNotFoundException     *interface{}
	StatusCode                    int64
}
