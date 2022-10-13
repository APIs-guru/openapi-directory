package operations

import (
	"openapi/pkg/models/shared"
)

type ListExperimentsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListExperimentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListExperimentsRequest struct {
	QueryParams ListExperimentsQueryParams
	Headers     ListExperimentsHeaders
}

type ListExperimentsResponse struct {
	ContentType             string
	ListExperimentsResponse *shared.ListExperimentsResponse
	StatusCode              int64
	ValidationException     *interface{}
}
