package operations

import (
"openapi/pkg/models/shared")

type DescribeTableDataImportJobPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
    
}

type DescribeTableDataImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeTableDataImportJobRequest struct {
    PathParams DescribeTableDataImportJobPathParams 
    Headers DescribeTableDataImportJobHeaders 
    
}

type DescribeTableDataImportJobResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeTableDataImportJobResult *shared.DescribeTableDataImportJobResult 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

