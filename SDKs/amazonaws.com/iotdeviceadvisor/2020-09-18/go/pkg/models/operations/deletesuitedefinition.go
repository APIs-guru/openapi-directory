package operations



type DeleteSuiteDefinitionPathParams struct {
    SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
    
}

type DeleteSuiteDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSuiteDefinitionRequest struct {
    PathParams DeleteSuiteDefinitionPathParams 
    Headers DeleteSuiteDefinitionHeaders 
    
}

type DeleteSuiteDefinitionResponse struct {
    ContentType string 
    DeleteSuiteDefinitionResponse map[string]interface{} 
    InternalServerException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

