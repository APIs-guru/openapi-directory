package operations

import (
"openapi/pkg/models/shared")


type StartMlEvaluationTaskRunXAmzTargetEnum string

const (
    StartMlEvaluationTaskRunXAmzTargetEnumAwsGlueStartMlEvaluationTaskRun StartMlEvaluationTaskRunXAmzTargetEnum = "AWSGlue.StartMLEvaluationTaskRun"
)


type StartMlEvaluationTaskRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartMlEvaluationTaskRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartMlEvaluationTaskRunRequest struct {
    Headers StartMlEvaluationTaskRunHeaders 
    Request shared.StartMlEvaluationTaskRunRequest `request:"mediaType=application/json"`
    
}

type StartMlEvaluationTaskRunResponse struct {
    ConcurrentRunsExceededException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    MlTransformNotReadyException *interface{} 
    OperationTimeoutException *interface{} 
    StartMlEvaluationTaskRunResponse *shared.StartMlEvaluationTaskRunResponse 
    StatusCode int64 
    
}

