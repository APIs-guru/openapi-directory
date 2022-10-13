package operations

import (
	"openapi/pkg/models/shared"
)

type ListEnvironmentsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEnvironmentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEnvironmentsRequest struct {
	QueryParams ListEnvironmentsQueryParams
	Headers     ListEnvironmentsHeaders
}

type ListEnvironmentsResponse struct {
	ContentType              string
	InternalServerException  *interface{}
	ListEnvironmentsResponse *shared.ListEnvironmentsResponse
	StatusCode               int64
	ValidationException      *interface{}
}
