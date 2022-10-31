package operations



type InitiateMultipartUploadPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type InitiateMultipartUploadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzArchiveDescription *string `header:"style=simple,explode=false,name=x-amz-archive-description"`
    XAmzPartSize *string `header:"style=simple,explode=false,name=x-amz-part-size"`
    
}

type InitiateMultipartUploadRequest struct {
    PathParams InitiateMultipartUploadPathParams 
    Headers InitiateMultipartUploadHeaders 
    
}

type InitiateMultipartUploadResponse struct {
    ContentType string 
    InitiateMultipartUploadOutput map[string]interface{} 
    InvalidParameterValueException *interface{} 
    MissingParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

