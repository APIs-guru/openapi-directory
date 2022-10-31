package operations

import (
"openapi/pkg/models/shared")

type ListDevicesQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListDevicesXAmzTargetEnum string

const (
    ListDevicesXAmzTargetEnumDeviceFarm20150623ListDevices ListDevicesXAmzTargetEnum = "DeviceFarm_20150623.ListDevices"
)


type ListDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDevicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDevicesRequest struct {
    QueryParams ListDevicesQueryParams 
    Headers ListDevicesHeaders 
    Request shared.ListDevicesRequest `request:"mediaType=application/json"`
    
}

type ListDevicesResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    ListDevicesResult *shared.ListDevicesResult 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

