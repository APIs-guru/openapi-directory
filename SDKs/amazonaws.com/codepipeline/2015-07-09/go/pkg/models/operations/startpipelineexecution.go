package operations

import (
"openapi/pkg/models/shared")


type StartPipelineExecutionXAmzTargetEnum string

const (
    StartPipelineExecutionXAmzTargetEnumCodePipeline20150709StartPipelineExecution StartPipelineExecutionXAmzTargetEnum = "CodePipeline_20150709.StartPipelineExecution"
)


type StartPipelineExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartPipelineExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartPipelineExecutionRequest struct {
    Headers StartPipelineExecutionHeaders 
    Request shared.StartPipelineExecutionInput `request:"mediaType=application/json"`
    
}

type StartPipelineExecutionResponse struct {
    ConflictException *interface{} 
    ContentType string 
    PipelineNotFoundException *interface{} 
    StartPipelineExecutionOutput *shared.StartPipelineExecutionOutput 
    StatusCode int64 
    ValidationException *interface{} 
    
}

