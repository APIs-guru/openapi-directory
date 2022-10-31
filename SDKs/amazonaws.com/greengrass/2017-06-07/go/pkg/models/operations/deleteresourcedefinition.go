package operations



type DeleteResourceDefinitionPathParams struct {
    ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
    
}

type DeleteResourceDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteResourceDefinitionRequest struct {
    PathParams DeleteResourceDefinitionPathParams 
    Headers DeleteResourceDefinitionHeaders 
    
}

type DeleteResourceDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteResourceDefinitionResponse map[string]interface{} 
    StatusCode int64 
    
}

