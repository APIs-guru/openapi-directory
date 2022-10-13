package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingGroupsQueryParams struct {
	MaxResults       *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NamePrefixFilter *string `queryParam:"style=form,explode=true,name=namePrefixFilter"`
	NextToken        *string `queryParam:"style=form,explode=true,name=nextToken"`
	ParentGroup      *string `queryParam:"style=form,explode=true,name=parentGroup"`
	Recursive        *bool   `queryParam:"style=form,explode=true,name=recursive"`
}

type ListThingGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListThingGroupsRequest struct {
	QueryParams ListThingGroupsQueryParams
	Headers     ListThingGroupsHeaders
}

type ListThingGroupsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ListThingGroupsResponse   *shared.ListThingGroupsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
