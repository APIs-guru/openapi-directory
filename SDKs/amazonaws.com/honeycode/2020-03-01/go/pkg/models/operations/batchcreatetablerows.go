package operations

import (
"openapi/pkg/models/shared")

type BatchCreateTableRowsPathParams struct {
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
    
}

type BatchCreateTableRowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchCreateTableRowsRequestBody struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    RowsToCreate []shared.CreateRowData `json:"rowsToCreate"`
    
}

type BatchCreateTableRowsRequest struct {
    PathParams BatchCreateTableRowsPathParams 
    Headers BatchCreateTableRowsHeaders 
    Request BatchCreateTableRowsRequestBody `request:"mediaType=application/json"`
    
}

type BatchCreateTableRowsResponse struct {
    AccessDeniedException *interface{} 
    BatchCreateTableRowsResult *shared.BatchCreateTableRowsResult 
    ContentType string 
    InternalServerException *interface{} 
    RequestTimeoutException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

