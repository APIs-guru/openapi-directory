package operations



type DeregisterJobDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeregisterJobDefinitionRequestBody struct {
    JobDefinition string `json:"jobDefinition"`
    
}

type DeregisterJobDefinitionRequest struct {
    Headers DeregisterJobDefinitionHeaders 
    Request DeregisterJobDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type DeregisterJobDefinitionResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeregisterJobDefinitionResponse map[string]interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

