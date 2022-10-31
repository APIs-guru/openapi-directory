package operations

import (
"openapi/pkg/models/shared")

type PutMethodPathParams struct {
    HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type PutMethodHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutMethodRequestBody struct {
    APIKeyRequired *bool `json:"apiKeyRequired,omitempty"`
    AuthorizationScopes []string `json:"authorizationScopes,omitempty"`
    AuthorizationType string `json:"authorizationType"`
    AuthorizerID *string `json:"authorizerId,omitempty"`
    OperationName *string `json:"operationName,omitempty"`
    RequestModels map[string]string `json:"requestModels,omitempty"`
    RequestParameters map[string]bool `json:"requestParameters,omitempty"`
    RequestValidatorID *string `json:"requestValidatorId,omitempty"`
    
}

type PutMethodRequest struct {
    PathParams PutMethodPathParams 
    Headers PutMethodHeaders 
    Request PutMethodRequestBody `request:"mediaType=application/json"`
    
}

type PutMethodResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    Method *shared.Method 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

