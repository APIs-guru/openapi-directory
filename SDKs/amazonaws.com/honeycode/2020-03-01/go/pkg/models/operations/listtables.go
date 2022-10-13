package operations

import (
	"openapi/pkg/models/shared"
)

type ListTablesPathParams struct {
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type ListTablesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTablesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTablesRequest struct {
	PathParams  ListTablesPathParams
	QueryParams ListTablesQueryParams
	Headers     ListTablesHeaders
}

type ListTablesResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListTablesResult            *shared.ListTablesResult
	RequestTimeoutException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
