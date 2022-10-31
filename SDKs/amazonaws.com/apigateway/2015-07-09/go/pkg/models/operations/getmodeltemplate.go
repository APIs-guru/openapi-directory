package operations

import (
"openapi/pkg/models/shared")

type GetModelTemplatePathParams struct {
    ModelName string `pathParam:"style=simple,explode=false,name=model_name"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type GetModelTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModelTemplateRequest struct {
    PathParams GetModelTemplatePathParams 
    Headers GetModelTemplateHeaders 
    
}

type GetModelTemplateResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    Template *shared.Template 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

