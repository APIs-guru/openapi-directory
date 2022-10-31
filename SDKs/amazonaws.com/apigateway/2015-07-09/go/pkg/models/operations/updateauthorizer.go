package operations

import (
"openapi/pkg/models/shared")

type UpdateAuthorizerPathParams struct {
    AuthorizerID string `pathParam:"style=simple,explode=false,name=authorizer_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type UpdateAuthorizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateAuthorizerRequestBody struct {
    PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
    
}

type UpdateAuthorizerRequest struct {
    PathParams UpdateAuthorizerPathParams 
    Headers UpdateAuthorizerHeaders 
    Request UpdateAuthorizerRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAuthorizerResponse struct {
    Authorizer *shared.Authorizer 
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

