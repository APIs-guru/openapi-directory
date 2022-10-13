package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteTableRowsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type BatchDeleteTableRowsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDeleteTableRowsRequestBody struct {
	ClientRequestToken *string  `json:"clientRequestToken"`
	RowIds             []string `json:"rowIds"`
}

type BatchDeleteTableRowsRequest struct {
	PathParams BatchDeleteTableRowsPathParams
	Headers    BatchDeleteTableRowsHeaders
	Request    BatchDeleteTableRowsRequestBody `request:"mediaType=application/json"`
}

type BatchDeleteTableRowsResponse struct {
	AccessDeniedException       *interface{}
	BatchDeleteTableRowsResult  *shared.BatchDeleteTableRowsResult
	ContentType                 string
	InternalServerException     *interface{}
	RequestTimeoutException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
