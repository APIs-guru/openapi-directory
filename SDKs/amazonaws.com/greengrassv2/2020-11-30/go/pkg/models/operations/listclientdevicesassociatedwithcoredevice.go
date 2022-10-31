package operations

import (
"openapi/pkg/models/shared")

type ListClientDevicesAssociatedWithCoreDevicePathParams struct {
    CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
    
}

type ListClientDevicesAssociatedWithCoreDeviceQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListClientDevicesAssociatedWithCoreDeviceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListClientDevicesAssociatedWithCoreDeviceRequest struct {
    PathParams ListClientDevicesAssociatedWithCoreDevicePathParams 
    QueryParams ListClientDevicesAssociatedWithCoreDeviceQueryParams 
    Headers ListClientDevicesAssociatedWithCoreDeviceHeaders 
    
}

type ListClientDevicesAssociatedWithCoreDeviceResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListClientDevicesAssociatedWithCoreDeviceResponse *shared.ListClientDevicesAssociatedWithCoreDeviceResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

