package operations



type DeleteFileSystemPathParams struct {
    FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
    
}

type DeleteFileSystemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteFileSystemRequest struct {
    PathParams DeleteFileSystemPathParams 
    Headers DeleteFileSystemHeaders 
    
}

type DeleteFileSystemResponse struct {
    BadRequest *interface{} 
    ContentType string 
    FileSystemInUse *interface{} 
    FileSystemNotFound *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

