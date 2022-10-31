package operations

import (
"openapi/pkg/models/shared")

type DescribeInsightPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type DescribeInsightHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeInsightRequest struct {
    PathParams DescribeInsightPathParams 
    Headers DescribeInsightHeaders 
    
}

type DescribeInsightResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeInsightResponse *shared.DescribeInsightResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

