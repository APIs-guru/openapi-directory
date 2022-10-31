package operations

import (
"openapi/pkg/models/shared")

type GetAttachmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzBearer string `header:"style=simple,explode=false,name=X-Amz-Bearer"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAttachmentRequestBody struct {
    AttachmentID string `json:"AttachmentId"`
    
}

type GetAttachmentRequest struct {
    Headers GetAttachmentHeaders 
    Request GetAttachmentRequestBody `request:"mediaType=application/json"`
    
}

type GetAttachmentResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAttachmentResponse *shared.GetAttachmentResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

