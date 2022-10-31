package operations

import (
"openapi/pkg/models/shared")

type TestInvokeAuthorizerPathParams struct {
    AuthorizerID string `pathParam:"style=simple,explode=false,name=authorizer_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type TestInvokeAuthorizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TestInvokeAuthorizerRequestBody struct {
    AdditionalContext map[string]string `json:"additionalContext,omitempty"`
    Body *string `json:"body,omitempty"`
    Headers map[string]string `json:"headers,omitempty"`
    MultiValueHeaders map[string][]string `json:"multiValueHeaders,omitempty"`
    PathWithQueryString *string `json:"pathWithQueryString,omitempty"`
    StageVariables map[string]string `json:"stageVariables,omitempty"`
    
}

type TestInvokeAuthorizerRequest struct {
    PathParams TestInvokeAuthorizerPathParams 
    Headers TestInvokeAuthorizerHeaders 
    Request TestInvokeAuthorizerRequestBody `request:"mediaType=application/json"`
    
}

type TestInvokeAuthorizerResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TestInvokeAuthorizerResponse *shared.TestInvokeAuthorizerResponse 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

