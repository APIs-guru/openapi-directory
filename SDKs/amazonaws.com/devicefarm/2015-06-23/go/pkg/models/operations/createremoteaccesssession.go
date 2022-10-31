package operations

import (
"openapi/pkg/models/shared")


type CreateRemoteAccessSessionXAmzTargetEnum string

const (
    CreateRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623CreateRemoteAccessSession CreateRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.CreateRemoteAccessSession"
)


type CreateRemoteAccessSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRemoteAccessSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRemoteAccessSessionRequest struct {
    Headers CreateRemoteAccessSessionHeaders 
    Request shared.CreateRemoteAccessSessionRequest `request:"mediaType=application/json"`
    
}

type CreateRemoteAccessSessionResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    CreateRemoteAccessSessionResult *shared.CreateRemoteAccessSessionResult 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

