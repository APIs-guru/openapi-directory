package operations

import (
"openapi/pkg/models/shared")

type ListInstalledComponentsPathParams struct {
    CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
    
}

type ListInstalledComponentsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListInstalledComponentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListInstalledComponentsRequest struct {
    PathParams ListInstalledComponentsPathParams 
    QueryParams ListInstalledComponentsQueryParams 
    Headers ListInstalledComponentsHeaders 
    
}

type ListInstalledComponentsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListInstalledComponentsResponse *shared.ListInstalledComponentsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

