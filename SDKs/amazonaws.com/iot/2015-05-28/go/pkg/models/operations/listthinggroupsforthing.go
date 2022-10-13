package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingGroupsForThingPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type ListThingGroupsForThingQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListThingGroupsForThingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListThingGroupsForThingRequest struct {
	PathParams  ListThingGroupsForThingPathParams
	QueryParams ListThingGroupsForThingQueryParams
	Headers     ListThingGroupsForThingHeaders
}

type ListThingGroupsForThingResponse struct {
	ContentType                     string
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	ListThingGroupsForThingResponse *shared.ListThingGroupsForThingResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
