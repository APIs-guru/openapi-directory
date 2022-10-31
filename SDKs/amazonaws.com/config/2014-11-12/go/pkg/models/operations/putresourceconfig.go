package operations

import (
"openapi/pkg/models/shared")


type PutResourceConfigXAmzTargetEnum string

const (
    PutResourceConfigXAmzTargetEnumStarlingDoveServicePutResourceConfig PutResourceConfigXAmzTargetEnum = "StarlingDoveService.PutResourceConfig"
)


type PutResourceConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutResourceConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutResourceConfigRequest struct {
    Headers PutResourceConfigHeaders 
    Request shared.PutResourceConfigRequest `request:"mediaType=application/json"`
    
}

type PutResourceConfigResponse struct {
    ContentType string 
    InsufficientPermissionsException *interface{} 
    MaxActiveResourcesExceededException *interface{} 
    NoRunningConfigurationRecorderException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

