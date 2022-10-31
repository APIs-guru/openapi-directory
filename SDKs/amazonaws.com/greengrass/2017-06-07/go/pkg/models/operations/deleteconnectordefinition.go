package operations



type DeleteConnectorDefinitionPathParams struct {
    ConnectorDefinitionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
    
}

type DeleteConnectorDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteConnectorDefinitionRequest struct {
    PathParams DeleteConnectorDefinitionPathParams 
    Headers DeleteConnectorDefinitionHeaders 
    
}

type DeleteConnectorDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteConnectorDefinitionResponse map[string]interface{} 
    StatusCode int64 
    
}

