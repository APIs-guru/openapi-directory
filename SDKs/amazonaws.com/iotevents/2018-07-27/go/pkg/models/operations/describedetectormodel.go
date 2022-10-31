package operations

import (
"openapi/pkg/models/shared")

type DescribeDetectorModelPathParams struct {
    DetectorModelName string `pathParam:"style=simple,explode=false,name=detectorModelName"`
    
}

type DescribeDetectorModelQueryParams struct {
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type DescribeDetectorModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeDetectorModelRequest struct {
    PathParams DescribeDetectorModelPathParams 
    QueryParams DescribeDetectorModelQueryParams 
    Headers DescribeDetectorModelHeaders 
    
}

type DescribeDetectorModelResponse struct {
    ContentType string 
    DescribeDetectorModelResponse *shared.DescribeDetectorModelResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

