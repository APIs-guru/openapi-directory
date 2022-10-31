package operations

import (
"openapi/pkg/models/shared")


type PutLifecycleEventHookExecutionStatusXAmzTargetEnum string

const (
    PutLifecycleEventHookExecutionStatusXAmzTargetEnumCodeDeploy20141006PutLifecycleEventHookExecutionStatus PutLifecycleEventHookExecutionStatusXAmzTargetEnum = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
)


type PutLifecycleEventHookExecutionStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutLifecycleEventHookExecutionStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutLifecycleEventHookExecutionStatusRequest struct {
    Headers PutLifecycleEventHookExecutionStatusHeaders 
    Request shared.PutLifecycleEventHookExecutionStatusInput `request:"mediaType=application/json"`
    
}

type PutLifecycleEventHookExecutionStatusResponse struct {
    ContentType string 
    DeploymentDoesNotExistException *interface{} 
    DeploymentIDRequiredException *interface{} 
    InvalidDeploymentIDException *interface{} 
    InvalidLifecycleEventHookExecutionIDException *interface{} 
    InvalidLifecycleEventHookExecutionStatusException *interface{} 
    LifecycleEventAlreadyCompletedException *interface{} 
    PutLifecycleEventHookExecutionStatusOutput *shared.PutLifecycleEventHookExecutionStatusOutput 
    StatusCode int64 
    UnsupportedActionForDeploymentTypeException *interface{} 
    
}

