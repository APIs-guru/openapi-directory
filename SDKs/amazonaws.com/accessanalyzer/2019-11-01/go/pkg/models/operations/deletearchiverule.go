package operations



type DeleteArchiveRulePathParams struct {
    AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
    RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
    
}

type DeleteArchiveRuleQueryParams struct {
    ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
    
}

type DeleteArchiveRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteArchiveRuleRequest struct {
    PathParams DeleteArchiveRulePathParams 
    QueryParams DeleteArchiveRuleQueryParams 
    Headers DeleteArchiveRuleHeaders 
    
}

type DeleteArchiveRuleResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

