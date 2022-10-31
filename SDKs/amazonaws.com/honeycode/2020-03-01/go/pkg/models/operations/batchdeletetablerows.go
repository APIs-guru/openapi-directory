package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteTableRowsPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type BatchDeleteTableRowsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchDeleteTableRowsRequestBody struct {
	ClientRequestToken *string  `json:"clientRequestToken,omitempty"`
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
