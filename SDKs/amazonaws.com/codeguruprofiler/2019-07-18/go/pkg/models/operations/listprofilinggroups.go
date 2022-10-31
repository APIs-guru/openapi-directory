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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
