package operations

import (
"openapi/pkg/models/shared")

type DescribeDetectorModelAnalysisPathParams struct {
    AnalysisID string `pathParam:"style=simple,explode=false,name=analysisId"`
    
}

type DescribeDetectorModelAnalysisHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeDetectorModelAnalysisRequest struct {
    PathParams DescribeDetectorModelAnalysisPathParams 
    Headers DescribeDetectorModelAnalysisHeaders 
    
}

type DescribeDetectorModelAnalysisResponse struct {
    ContentType string 
    DescribeDetectorModelAnalysisResponse *shared.DescribeDetectorModelAnalysisResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

