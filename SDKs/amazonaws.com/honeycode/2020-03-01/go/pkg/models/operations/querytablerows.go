package operations

import (
	"openapi/pkg/models/shared"
)

type QueryTableRowsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type QueryTableRowsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type QueryTableRowsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type QueryTableRowsRequestBodyFilterFormula struct {
	ContextRowID *string `json:"contextRowId"`
	Formula      *string `json:"formula"`
}

type QueryTableRowsRequestBody struct {
	FilterFormula QueryTableRowsRequestBodyFilterFormula `json:"filterFormula"`
	MaxResults    *int64                                 `json:"maxResults"`
	NextToken     *string                                `json:"nextToken"`
}

type QueryTableRowsRequest struct {
	PathParams  QueryTableRowsPathParams
	QueryParams QueryTableRowsQueryParams
	Headers     QueryTableRowsHeaders
	Request     QueryTableRowsRequestBody `request:"mediaType=application/json"`
}

type QueryTableRowsResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	QueryTableRowsResult        *shared.QueryTableRowsResult
	RequestTimeoutException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
