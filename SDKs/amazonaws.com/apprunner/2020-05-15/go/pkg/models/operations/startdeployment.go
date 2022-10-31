package operations

import (
"openapi/pkg/models/shared")


type StartDeploymentXAmzTargetEnum string

const (
    StartDeploymentXAmzTargetEnumAppRunnerStartDeployment StartDeploymentXAmzTargetEnum = "AppRunner.StartDeployment"
)


type StartDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartDeploymentRequest struct {
    Headers StartDeploymentHeaders 
    Request shared.StartDeploymentRequest `request:"mediaType=application/json"`
    
}

type StartDeploymentResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StartDeploymentResponse *shared.StartDeploymentResponse 
    StatusCode int64 
    
}

