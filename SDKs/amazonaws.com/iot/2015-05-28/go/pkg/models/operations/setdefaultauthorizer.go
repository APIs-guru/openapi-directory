package operations

import (
"openapi/pkg/models/shared")

type SetDefaultAuthorizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type SetDefaultAuthorizerRequestBody struct {
    AuthorizerName string `json:"authorizerName"`
    
}

type SetDefaultAuthorizerRequest struct {
    Headers SetDefaultAuthorizerHeaders 
    Request SetDefaultAuthorizerRequestBody `request:"mediaType=application/json"`
    
}

type SetDefaultAuthorizerResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    SetDefaultAuthorizerResponse *shared.SetDefaultAuthorizerResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

