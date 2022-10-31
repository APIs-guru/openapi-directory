package operations



type DeleteJobQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteJobQueueRequestBody struct {
    JobQueue string `json:"jobQueue"`
    
}

type DeleteJobQueueRequest struct {
    Headers DeleteJobQueueHeaders 
    Request DeleteJobQueueRequestBody `request:"mediaType=application/json"`
    
}

type DeleteJobQueueResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeleteJobQueueResponse map[string]interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

