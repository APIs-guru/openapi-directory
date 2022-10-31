package operations

import (
"openapi/pkg/models/shared")

type DescribePipelinePathParams struct {
    PipelineName string `pathParam:"style=simple,explode=false,name=pipelineName"`
    
}

type DescribePipelineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribePipelineRequest struct {
    PathParams DescribePipelinePathParams 
    Headers DescribePipelineHeaders 
    
}

type DescribePipelineResponse struct {
    ContentType string 
    DescribePipelineResponse *shared.DescribePipelineResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

