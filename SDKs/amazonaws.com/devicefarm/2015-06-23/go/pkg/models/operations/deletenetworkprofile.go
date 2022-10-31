package operations

import (
"openapi/pkg/models/shared")


type DeleteNetworkProfileXAmzTargetEnum string

const (
    DeleteNetworkProfileXAmzTargetEnumDeviceFarm20150623DeleteNetworkProfile DeleteNetworkProfileXAmzTargetEnum = "DeviceFarm_20150623.DeleteNetworkProfile"
)


type DeleteNetworkProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteNetworkProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteNetworkProfileRequest struct {
    Headers DeleteNetworkProfileHeaders 
    Request shared.DeleteNetworkProfileRequest `request:"mediaType=application/json"`
    
}

type DeleteNetworkProfileResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    DeleteNetworkProfileResult map[string]interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

