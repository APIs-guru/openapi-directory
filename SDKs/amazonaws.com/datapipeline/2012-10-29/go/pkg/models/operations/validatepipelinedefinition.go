package operations

import (
"openapi/pkg/models/shared")


type ValidatePipelineDefinitionXAmzTargetEnum string

const (
    ValidatePipelineDefinitionXAmzTargetEnumDataPipelineValidatePipelineDefinition ValidatePipelineDefinitionXAmzTargetEnum = "DataPipeline.ValidatePipelineDefinition"
)


type ValidatePipelineDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ValidatePipelineDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ValidatePipelineDefinitionRequest struct {
    Headers ValidatePipelineDefinitionHeaders 
    Request shared.ValidatePipelineDefinitionInput `request:"mediaType=application/json"`
    
}

type ValidatePipelineDefinitionResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    PipelineDeletedException *interface{} 
    PipelineNotFoundException *interface{} 
    StatusCode int64 
    ValidatePipelineDefinitionOutput *shared.ValidatePipelineDefinitionOutput 
    
}

