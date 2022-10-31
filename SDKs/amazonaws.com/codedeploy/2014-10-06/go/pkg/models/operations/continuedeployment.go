package operations

import (
"openapi/pkg/models/shared")


type ContinueDeploymentXAmzTargetEnum string

const (
    ContinueDeploymentXAmzTargetEnumCodeDeploy20141006ContinueDeployment ContinueDeploymentXAmzTargetEnum = "CodeDeploy_20141006.ContinueDeployment"
)


type ContinueDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ContinueDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ContinueDeploymentRequest struct {
    Headers ContinueDeploymentHeaders 
    Request shared.ContinueDeploymentInput `request:"mediaType=application/json"`
    
}

type ContinueDeploymentResponse struct {
    ContentType string 
    DeploymentAlreadyCompletedException *interface{} 
    DeploymentDoesNotExistException *interface{} 
    DeploymentIDRequiredException *interface{} 
    DeploymentIsNotInReadyStateException *interface{} 
    InvalidDeploymentIDException *interface{} 
    InvalidDeploymentStatusException *interface{} 
    InvalidDeploymentWaitTypeException *interface{} 
    StatusCode int64 
    UnsupportedActionForDeploymentTypeException *interface{} 
    
}

