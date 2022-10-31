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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
