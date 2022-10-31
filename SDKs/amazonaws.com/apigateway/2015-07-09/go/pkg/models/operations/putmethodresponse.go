package operations

import (
"openapi/pkg/models/shared")

type PutMethodResponsePathParams struct {
    HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    StatusCode string `pathParam:"style=simple,explode=false,name=status_code"`
    
}

type PutMethodResponseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutMethodResponseRequestBody struct {
    ResponseModels map[string]string `json:"responseModels,omitempty"`
    ResponseParameters map[string]bool `json:"responseParameters,omitempty"`
    
}

type PutMethodResponseRequest struct {
    PathParams PutMethodResponsePathParams 
    Headers PutMethodResponseHeaders 
    Request PutMethodResponseRequestBody `request:"mediaType=application/json"`
    
}

type PutMethodResponseResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    MethodResponse *shared.MethodResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

