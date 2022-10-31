package operations

import (
"openapi/pkg/models/shared")

type GetAuthorizerPathParams struct {
    AuthorizerID string `pathParam:"style=simple,explode=false,name=authorizer_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type GetAuthorizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAuthorizerRequest struct {
    PathParams GetAuthorizerPathParams 
    Headers GetAuthorizerHeaders 
    
}

type GetAuthorizerResponse struct {
    Authorizer *shared.Authorizer 
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

