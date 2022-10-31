package operations

import (
"openapi/pkg/models/shared")

type GetExportPathParams struct {
    ExportType string `pathParam:"style=simple,explode=false,name=export_type"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    StageName string `pathParam:"style=simple,explode=false,name=stage_name"`
    
}

type GetExportQueryParams struct {
    Parameters map[string]string `queryParam:"style=form,explode=true,name=parameters"`
    
}

type GetExportHeaders struct {
    Accept *string `header:"style=simple,explode=false,name=Accept"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetExportRequest struct {
    PathParams GetExportPathParams 
    QueryParams GetExportQueryParams 
    Headers GetExportHeaders 
    
}

type GetExportResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    ExportResponse *shared.ExportResponse 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

