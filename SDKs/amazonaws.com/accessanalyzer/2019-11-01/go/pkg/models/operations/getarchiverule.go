package operations

import (
"openapi/pkg/models/shared")

type GetArchiveRulePathParams struct {
    AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
    RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
    
}

type GetArchiveRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetArchiveRuleRequest struct {
    PathParams GetArchiveRulePathParams 
    Headers GetArchiveRuleHeaders 
    
}

type GetArchiveRuleResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetArchiveRuleResponse *shared.GetArchiveRuleResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

