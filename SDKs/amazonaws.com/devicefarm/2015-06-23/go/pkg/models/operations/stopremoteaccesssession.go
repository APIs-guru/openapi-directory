package operations

import (
"openapi/pkg/models/shared")


type StopRemoteAccessSessionXAmzTargetEnum string

const (
    StopRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623StopRemoteAccessSession StopRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.StopRemoteAccessSession"
)


type StopRemoteAccessSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopRemoteAccessSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopRemoteAccessSessionRequest struct {
    Headers StopRemoteAccessSessionHeaders 
    Request shared.StopRemoteAccessSessionRequest `request:"mediaType=application/json"`
    
}

type StopRemoteAccessSessionResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    StopRemoteAccessSessionResult *shared.StopRemoteAccessSessionResult 
    
}

