package operations

import (
"openapi/pkg/models/shared")

type ListTableRowsPathParams struct {
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
    
}

type ListTableRowsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListTableRowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTableRowsRequestBody struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RowIds []string `json:"rowIds,omitempty"`
    
}

type ListTableRowsRequest struct {
    PathParams ListTableRowsPathParams 
    QueryParams ListTableRowsQueryParams 
    Headers ListTableRowsHeaders 
    Request ListTableRowsRequestBody `request:"mediaType=application/json"`
    
}

type ListTableRowsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListTableRowsResult *shared.ListTableRowsResult 
    RequestTimeoutException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

