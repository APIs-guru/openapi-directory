package operations

import (
"openapi/pkg/models/shared")

type SendMessageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzBearer string `header:"style=simple,explode=false,name=X-Amz-Bearer"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type SendMessageRequestBody struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    Content string `json:"Content"`
    ContentType string `json:"ContentType"`
    
}

type SendMessageRequest struct {
    Headers SendMessageHeaders 
    Request SendMessageRequestBody `request:"mediaType=application/json"`
    
}

type SendMessageResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    SendMessageResponse *shared.SendMessageResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

