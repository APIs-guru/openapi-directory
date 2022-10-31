package operations



type DeletePipelinePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type DeletePipelineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeletePipelineRequest struct {
    PathParams DeletePipelinePathParams 
    Headers DeletePipelineHeaders 
    
}

type DeletePipelineResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeletePipelineResponse map[string]interface{} 
    IncompatibleVersionException *interface{} 
    InternalServiceException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

