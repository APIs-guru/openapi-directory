package operations



type DeleteAnalyzerPathParams struct {
    AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
    
}

type DeleteAnalyzerQueryParams struct {
    ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
    
}

type DeleteAnalyzerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteAnalyzerRequest struct {
    PathParams DeleteAnalyzerPathParams 
    QueryParams DeleteAnalyzerQueryParams 
    Headers DeleteAnalyzerHeaders 
    
}

type DeleteAnalyzerResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

