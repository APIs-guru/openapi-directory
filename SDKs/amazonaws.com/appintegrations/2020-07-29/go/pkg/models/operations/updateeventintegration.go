package operations



type UpdateEventIntegrationPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=Name"`
    
}

type UpdateEventIntegrationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateEventIntegrationRequestBody struct {
    Description *string `json:"Description,omitempty"`
    
}

type UpdateEventIntegrationRequest struct {
    PathParams UpdateEventIntegrationPathParams 
    Headers UpdateEventIntegrationHeaders 
    Request UpdateEventIntegrationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateEventIntegrationResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateEventIntegrationResponse map[string]interface{} 
    
}

