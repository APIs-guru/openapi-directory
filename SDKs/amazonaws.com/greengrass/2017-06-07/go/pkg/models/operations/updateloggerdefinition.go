package operations



type UpdateLoggerDefinitionPathParams struct {
    LoggerDefinitionID string `pathParam:"style=simple,explode=false,name=LoggerDefinitionId"`
    
}

type UpdateLoggerDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateLoggerDefinitionRequestBody struct {
    Name *string `json:"Name,omitempty"`
    
}

type UpdateLoggerDefinitionRequest struct {
    PathParams UpdateLoggerDefinitionPathParams 
    Headers UpdateLoggerDefinitionHeaders 
    Request UpdateLoggerDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateLoggerDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    StatusCode int64 
    UpdateLoggerDefinitionResponse map[string]interface{} 
    
}

