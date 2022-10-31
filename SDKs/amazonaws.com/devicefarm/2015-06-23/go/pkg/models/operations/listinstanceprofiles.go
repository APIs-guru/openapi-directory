package operations

import (
"openapi/pkg/models/shared")


type ListInstanceProfilesXAmzTargetEnum string

const (
    ListInstanceProfilesXAmzTargetEnumDeviceFarm20150623ListInstanceProfiles ListInstanceProfilesXAmzTargetEnum = "DeviceFarm_20150623.ListInstanceProfiles"
)


type ListInstanceProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListInstanceProfilesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListInstanceProfilesRequest struct {
    Headers ListInstanceProfilesHeaders 
    Request shared.ListInstanceProfilesRequest `request:"mediaType=application/json"`
    
}

type ListInstanceProfilesResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    ListInstanceProfilesResult *shared.ListInstanceProfilesResult 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

