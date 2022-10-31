package operations

import (
"openapi/pkg/models/shared")


type DeleteAutoScalingConfigurationXAmzTargetEnum string

const (
    DeleteAutoScalingConfigurationXAmzTargetEnumAppRunnerDeleteAutoScalingConfiguration DeleteAutoScalingConfigurationXAmzTargetEnum = "AppRunner.DeleteAutoScalingConfiguration"
)


type DeleteAutoScalingConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAutoScalingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAutoScalingConfigurationRequest struct {
    Headers DeleteAutoScalingConfigurationHeaders 
    Request shared.DeleteAutoScalingConfigurationRequest `request:"mediaType=application/json"`
    
}

type DeleteAutoScalingConfigurationResponse struct {
    ContentType string 
    DeleteAutoScalingConfigurationResponse *shared.DeleteAutoScalingConfigurationResponse 
    InternalServiceErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

