package operations



type CompleteAttachmentUploadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzBearer string `header:"style=simple,explode=false,name=X-Amz-Bearer"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CompleteAttachmentUploadRequestBody struct {
    AttachmentIds []string `json:"AttachmentIds"`
    ClientToken string `json:"ClientToken"`
    
}

type CompleteAttachmentUploadRequest struct {
    Headers CompleteAttachmentUploadHeaders 
    Request CompleteAttachmentUploadRequestBody `request:"mediaType=application/json"`
    
}

type CompleteAttachmentUploadResponse struct {
    AccessDeniedException *interface{} 
    CompleteAttachmentUploadResponse map[string]interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

