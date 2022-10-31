package operations

import (
"openapi/pkg/models/shared")

type ListDevicePoolsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListDevicePoolsXAmzTargetEnum string

const (
    ListDevicePoolsXAmzTargetEnumDeviceFarm20150623ListDevicePools ListDevicePoolsXAmzTargetEnum = "DeviceFarm_20150623.ListDevicePools"
)


type ListDevicePoolsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDevicePoolsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDevicePoolsRequest struct {
    QueryParams ListDevicePoolsQueryParams 
    Headers ListDevicePoolsHeaders 
    Request shared.ListDevicePoolsRequest `request:"mediaType=application/json"`
    
}

type ListDevicePoolsResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    ListDevicePoolsResult *shared.ListDevicePoolsResult 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

