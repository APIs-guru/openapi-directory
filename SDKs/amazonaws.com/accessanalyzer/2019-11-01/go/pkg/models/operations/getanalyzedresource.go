package operations

import (
"openapi/pkg/models/shared")

type GetAnalyzedResourceQueryParams struct {
    AnalyzerArn string `queryParam:"style=form,explode=true,name=analyzerArn"`
    ResourceArn string `queryParam:"style=form,explode=true,name=resourceArn"`
    
}

type GetAnalyzedResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAnalyzedResourceRequest struct {
    QueryParams GetAnalyzedResourceQueryParams 
    Headers GetAnalyzedResourceHeaders 
    
}

type GetAnalyzedResourceResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAnalyzedResourceResponse *shared.GetAnalyzedResourceResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

