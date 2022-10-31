package operations

import (
"openapi/pkg/models/shared")


type GetRemoteAccessSessionXAmzTargetEnum string

const (
    GetRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623GetRemoteAccessSession GetRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.GetRemoteAccessSession"
)


type GetRemoteAccessSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRemoteAccessSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRemoteAccessSessionRequest struct {
    Headers GetRemoteAccessSessionHeaders 
    Request shared.GetRemoteAccessSessionRequest `request:"mediaType=application/json"`
    
}

type GetRemoteAccessSessionResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    GetRemoteAccessSessionResult *shared.GetRemoteAccessSessionResult 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

