package operations

import (
"openapi/pkg/models/shared")


type CreateNetworkProfileXAmzTargetEnum string

const (
    CreateNetworkProfileXAmzTargetEnumDeviceFarm20150623CreateNetworkProfile CreateNetworkProfileXAmzTargetEnum = "DeviceFarm_20150623.CreateNetworkProfile"
)


type CreateNetworkProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateNetworkProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateNetworkProfileRequest struct {
    Headers CreateNetworkProfileHeaders 
    Request shared.CreateNetworkProfileRequest `request:"mediaType=application/json"`
    
}

type CreateNetworkProfileResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    CreateNetworkProfileResult *shared.CreateNetworkProfileResult 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

