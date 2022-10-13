package operations

import (
	"openapi/pkg/models/shared"
)

type ListRetainedMessagesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRetainedMessagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRetainedMessagesRequest struct {
	QueryParams ListRetainedMessagesQueryParams
	Headers     ListRetainedMessagesHeaders
}

type ListRetainedMessagesResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ListRetainedMessagesResponse *shared.ListRetainedMessagesResponse
	MethodNotAllowedException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UnauthorizedException        *interface{}
}
