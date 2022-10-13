package operations

import (
	"openapi/pkg/models/shared"
)

type BatchCreateTableRowsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type BatchCreateTableRowsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchCreateTableRowsRequestBody struct {
	ClientRequestToken *string                `json:"clientRequestToken"`
	RowsToCreate       []shared.CreateRowData `json:"rowsToCreate"`
}

type BatchCreateTableRowsRequest struct {
	PathParams BatchCreateTableRowsPathParams
	Headers    BatchCreateTableRowsHeaders
	Request    BatchCreateTableRowsRequestBody `request:"mediaType=application/json"`
}

type BatchCreateTableRowsResponse struct {
	AccessDeniedException         *interface{}
	BatchCreateTableRowsResult    *shared.BatchCreateTableRowsResult
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
