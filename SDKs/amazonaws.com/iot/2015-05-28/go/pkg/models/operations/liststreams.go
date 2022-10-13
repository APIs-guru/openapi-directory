package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamsQueryParams struct {
	IsAscendingOrder *bool   `queryParam:"style=form,explode=true,name=isAscendingOrder"`
	MaxResults       *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken        *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListStreamsRequest struct {
	QueryParams ListStreamsQueryParams
	Headers     ListStreamsHeaders
}

type ListStreamsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListStreamsResponse         *shared.ListStreamsResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
