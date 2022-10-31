package operations



type DeleteFunctionDefinitionPathParams struct {
    FunctionDefinitionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
    
}

type DeleteFunctionDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteFunctionDefinitionRequest struct {
    PathParams DeleteFunctionDefinitionPathParams 
    Headers DeleteFunctionDefinitionHeaders 
    
}

type DeleteFunctionDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteFunctionDefinitionResponse map[string]interface{} 
    StatusCode int64 
    
}

