package operations

import (
"openapi/pkg/models/shared")


type DisableStageTransitionXAmzTargetEnum string

const (
    DisableStageTransitionXAmzTargetEnumCodePipeline20150709DisableStageTransition DisableStageTransitionXAmzTargetEnum = "CodePipeline_20150709.DisableStageTransition"
)


type DisableStageTransitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableStageTransitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableStageTransitionRequest struct {
    Headers DisableStageTransitionHeaders 
    Request shared.DisableStageTransitionInput `request:"mediaType=application/json"`
    
}

type DisableStageTransitionResponse struct {
    ContentType string 
    PipelineNotFoundException *interface{} 
    StageNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

