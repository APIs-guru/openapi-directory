package operations

import (
	"openapi/pkg/models/shared"
)

type ListProfilingGroupsQueryParams struct {
	IncludeDescription *bool   `queryParam:"style=form,explode=true,name=includeDescription"`
	MaxResults         *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken          *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListProfilingGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProfilingGroupsRequest struct {
	QueryParams ListProfilingGroupsQueryParams
	Headers     ListProfilingGroupsHeaders
}

type ListProfilingGroupsResponse struct {
	ContentType                 string
	InternalServerException     *interface{}
	ListProfilingGroupsResponse *shared.ListProfilingGroupsResponse
	StatusCode                  int64
	ThrottlingException         *interface{}
}
