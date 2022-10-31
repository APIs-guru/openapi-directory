package operations

import (
"openapi/pkg/models/shared")

type GetControlPathParams struct {
    ControlID string `pathParam:"style=simple,explode=false,name=controlId"`
    
}

type GetControlHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetControlRequest struct {
    PathParams GetControlPathParams 
    Headers GetControlHeaders 
    
}

type GetControlResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetControlResponse *shared.GetControlResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

