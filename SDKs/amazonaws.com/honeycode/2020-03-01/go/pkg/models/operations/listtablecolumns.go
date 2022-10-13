package operations

import (
	"openapi/pkg/models/shared"
)

type ListTableColumnsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type ListTableColumnsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTableColumnsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTableColumnsRequest struct {
	PathParams  ListTableColumnsPathParams
	QueryParams ListTableColumnsQueryParams
	Headers     ListTableColumnsHeaders
}

type ListTableColumnsResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListTableColumnsResult      *shared.ListTableColumnsResult
	RequestTimeoutException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
