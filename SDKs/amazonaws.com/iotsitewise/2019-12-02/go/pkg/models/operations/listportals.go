package operations

import (
	"openapi/pkg/models/shared"
)

type ListPortalsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPortalsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPortalsRequest struct {
	QueryParams ListPortalsQueryParams
	Headers     ListPortalsHeaders
}

type ListPortalsResponse struct {
	ContentType              string
	InternalFailureException *interface{}
	InvalidRequestException  *interface{}
	ListPortalsResponse      *shared.ListPortalsResponse
	StatusCode               int64
	ThrottlingException      *interface{}
}
