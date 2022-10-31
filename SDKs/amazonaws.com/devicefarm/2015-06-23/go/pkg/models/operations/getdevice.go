package operations

import (
"openapi/pkg/models/shared")


type GetDeviceXAmzTargetEnum string

const (
    GetDeviceXAmzTargetEnumDeviceFarm20150623GetDevice GetDeviceXAmzTargetEnum = "DeviceFarm_20150623.GetDevice"
)


type GetDeviceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDeviceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDeviceRequest struct {
    Headers GetDeviceHeaders 
    Request shared.GetDeviceRequest `request:"mediaType=application/json"`
    
}

type GetDeviceResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    GetDeviceResult *shared.GetDeviceResult 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

