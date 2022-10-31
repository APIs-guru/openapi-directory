package operations

import (
"openapi/pkg/models/shared")


type DeleteConfigurationRecorderXAmzTargetEnum string

const (
    DeleteConfigurationRecorderXAmzTargetEnumStarlingDoveServiceDeleteConfigurationRecorder DeleteConfigurationRecorderXAmzTargetEnum = "StarlingDoveService.DeleteConfigurationRecorder"
)


type DeleteConfigurationRecorderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteConfigurationRecorderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteConfigurationRecorderRequest struct {
    Headers DeleteConfigurationRecorderHeaders 
    Request shared.DeleteConfigurationRecorderRequest `request:"mediaType=application/json"`
    
}

type DeleteConfigurationRecorderResponse struct {
    ContentType string 
    NoSuchConfigurationRecorderException *interface{} 
    StatusCode int64 
    
}

