package operations

import (
"openapi/pkg/models/shared")


type ListCoreDevicesStatusEnum string

const (
    ListCoreDevicesStatusEnumHealthy ListCoreDevicesStatusEnum = "HEALTHY"
ListCoreDevicesStatusEnumUnhealthy ListCoreDevicesStatusEnum = "UNHEALTHY"
)


type ListCoreDevicesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    Status *ListCoreDevicesStatusEnum `queryParam:"style=form,explode=true,name=status"`
    ThingGroupArn *string `queryParam:"style=form,explode=true,name=thingGroupArn"`
    
}

type ListCoreDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListCoreDevicesRequest struct {
    QueryParams ListCoreDevicesQueryParams 
    Headers ListCoreDevicesHeaders 
    
}

type ListCoreDevicesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListCoreDevicesResponse *shared.ListCoreDevicesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

