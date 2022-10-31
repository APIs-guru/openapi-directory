package operations

import (
"openapi/pkg/models/shared")


type UpdateNetworkProfileXAmzTargetEnum string

const (
    UpdateNetworkProfileXAmzTargetEnumDeviceFarm20150623UpdateNetworkProfile UpdateNetworkProfileXAmzTargetEnum = "DeviceFarm_20150623.UpdateNetworkProfile"
)


type UpdateNetworkProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateNetworkProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateNetworkProfileRequest struct {
    Headers UpdateNetworkProfileHeaders 
    Request shared.UpdateNetworkProfileRequest `request:"mediaType=application/json"`
    
}

type UpdateNetworkProfileResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    UpdateNetworkProfileResult *shared.UpdateNetworkProfileResult 
    
}

