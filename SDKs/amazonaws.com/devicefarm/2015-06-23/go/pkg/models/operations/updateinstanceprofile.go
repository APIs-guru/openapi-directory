package operations

import (
"openapi/pkg/models/shared")


type UpdateInstanceProfileXAmzTargetEnum string

const (
    UpdateInstanceProfileXAmzTargetEnumDeviceFarm20150623UpdateInstanceProfile UpdateInstanceProfileXAmzTargetEnum = "DeviceFarm_20150623.UpdateInstanceProfile"
)


type UpdateInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateInstanceProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateInstanceProfileRequest struct {
    Headers UpdateInstanceProfileHeaders 
    Request shared.UpdateInstanceProfileRequest `request:"mediaType=application/json"`
    
}

type UpdateInstanceProfileResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    UpdateInstanceProfileResult *shared.UpdateInstanceProfileResult 
    
}

