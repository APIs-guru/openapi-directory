package operations

import (
"openapi/pkg/models/shared")


type StopDeploymentXAmzTargetEnum string

const (
    StopDeploymentXAmzTargetEnumCodeDeploy20141006StopDeployment StopDeploymentXAmzTargetEnum = "CodeDeploy_20141006.StopDeployment"
)


type StopDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopDeploymentRequest struct {
    Headers StopDeploymentHeaders 
    Request shared.StopDeploymentInput `request:"mediaType=application/json"`
    
}

type StopDeploymentResponse struct {
    ContentType string 
    DeploymentAlreadyCompletedException *interface{} 
    DeploymentDoesNotExistException *interface{} 
    DeploymentGroupDoesNotExistException *interface{} 
    DeploymentIDRequiredException *interface{} 
    InvalidDeploymentIDException *interface{} 
    StatusCode int64 
    StopDeploymentOutput *shared.StopDeploymentOutput 
    UnsupportedActionForDeploymentTypeException *interface{} 
    
}

