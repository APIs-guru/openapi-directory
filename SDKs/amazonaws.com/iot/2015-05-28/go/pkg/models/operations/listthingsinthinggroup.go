package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingsInThingGroupPathParams struct {
	ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
}

type ListThingsInThingGroupQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
	Recursive  *bool   `queryParam:"style=form,explode=true,name=recursive"`
}

type ListThingsInThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListThingsInThingGroupRequest struct {
	PathParams  ListThingsInThingGroupPathParams
	QueryParams ListThingsInThingGroupQueryParams
	Headers     ListThingsInThingGroupHeaders
}

type ListThingsInThingGroupResponse struct {
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ListThingsInThingGroupResponse *shared.ListThingsInThingGroupResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
