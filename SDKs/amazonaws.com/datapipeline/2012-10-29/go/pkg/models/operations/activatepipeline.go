package operations

import (
"openapi/pkg/models/shared")


type ActivatePipelineXAmzTargetEnum string

const (
    ActivatePipelineXAmzTargetEnumDataPipelineActivatePipeline ActivatePipelineXAmzTargetEnum = "DataPipeline.ActivatePipeline"
)


type ActivatePipelineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ActivatePipelineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ActivatePipelineRequest struct {
    Headers ActivatePipelineHeaders 
    Request shared.ActivatePipelineInput `request:"mediaType=application/json"`
    
}

type ActivatePipelineResponse struct {
    ActivatePipelineOutput map[string]interface{} 
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    PipelineDeletedException *interface{} 
    PipelineNotFoundException *interface{} 
    StatusCode int64 
    
}

