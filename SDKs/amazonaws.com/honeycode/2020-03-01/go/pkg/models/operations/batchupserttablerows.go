package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpsertTableRowsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type BatchUpsertTableRowsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchUpsertTableRowsRequestBody struct {
	ClientRequestToken *string                `json:"clientRequestToken,omitempty"`
	RowsToUpsert       []shared.UpsertRowData `json:"rowsToUpsert"`
}

type BatchUpsertTableRowsRequest struct {
	PathParams BatchUpsertTableRowsPathParams
	Headers    BatchUpsertTableRowsHeaders
	Request    BatchUpsertTableRowsRequestBody `request:"mediaType=application/json"`
}

type BatchUpsertTableRowsResponse struct {
	AccessDeniedException         *interface{}
	BatchUpsertTableRowsResult    *shared.BatchUpsertTableRowsResult
	ContentType                   string
	InternalServerException       *interface{}
	RequestTimeoutException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
