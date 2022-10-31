package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdateTableRowsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type BatchUpdateTableRowsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchUpdateTableRowsRequestBody struct {
	ClientRequestToken *string                `json:"clientRequestToken,omitempty"`
	RowsToUpdate       []shared.UpdateRowData `json:"rowsToUpdate"`
}

type BatchUpdateTableRowsRequest struct {
	PathParams BatchUpdateTableRowsPathParams
	Headers    BatchUpdateTableRowsHeaders
	Request    BatchUpdateTableRowsRequestBody `request:"mediaType=application/json"`
}

type BatchUpdateTableRowsResponse struct {
	AccessDeniedException       *interface{}
	BatchUpdateTableRowsResult  *shared.BatchUpdateTableRowsResult
	ContentType                 string
	InternalServerException     *interface{}
	RequestTimeoutException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
