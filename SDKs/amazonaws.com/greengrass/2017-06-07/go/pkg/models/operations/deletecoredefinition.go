package operations



type DeleteCoreDefinitionPathParams struct {
    CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
    
}

type DeleteCoreDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteCoreDefinitionRequest struct {
    PathParams DeleteCoreDefinitionPathParams 
    Headers DeleteCoreDefinitionHeaders 
    
}

type DeleteCoreDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteCoreDefinitionResponse map[string]interface{} 
    StatusCode int64 
    
}

