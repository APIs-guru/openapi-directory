package operations

import (
"openapi/pkg/models/shared")

type GetAnalyzerPathParams struct {
    AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
    
}

type GetAnalyzerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAnalyzerRequest struct {
    PathParams GetAnalyzerPathParams 
    Headers GetAnalyzerHeaders 
    
}

type GetAnalyzerResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAnalyzerResponse *shared.GetAnalyzerResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

