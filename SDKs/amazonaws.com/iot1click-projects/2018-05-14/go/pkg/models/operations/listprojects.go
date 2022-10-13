package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjectsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListProjectsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProjectsRequest struct {
	QueryParams ListProjectsQueryParams
	Headers     ListProjectsHeaders
}

type ListProjectsResponse struct {
	ContentType              string
	InternalFailureException *interface{}
	InvalidRequestException  *interface{}
	ListProjectsResponse     *shared.ListProjectsResponse
	StatusCode               int64
}
