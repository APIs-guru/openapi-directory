package operations

import (
"openapi/pkg/models/shared")


type GetDeviceInstanceXAmzTargetEnum string

const (
    GetDeviceInstanceXAmzTargetEnumDeviceFarm20150623GetDeviceInstance GetDeviceInstanceXAmzTargetEnum = "DeviceFarm_20150623.GetDeviceInstance"
)


type GetDeviceInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDeviceInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDeviceInstanceRequest struct {
    Headers GetDeviceInstanceHeaders 
    Request shared.GetDeviceInstanceRequest `request:"mediaType=application/json"`
    
}

type GetDeviceInstanceResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    GetDeviceInstanceResult *shared.GetDeviceInstanceResult 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

