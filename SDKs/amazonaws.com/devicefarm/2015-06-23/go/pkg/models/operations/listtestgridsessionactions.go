package operations

import (
"openapi/pkg/models/shared")

type ListTestGridSessionActionsQueryParams struct {
    MaxResult *string `queryParam:"style=form,explode=true,name=maxResult"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListTestGridSessionActionsXAmzTargetEnum string

const (
    ListTestGridSessionActionsXAmzTargetEnumDeviceFarm20150623ListTestGridSessionActions ListTestGridSessionActionsXAmzTargetEnum = "DeviceFarm_20150623.ListTestGridSessionActions"
)


type ListTestGridSessionActionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTestGridSessionActionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTestGridSessionActionsRequest struct {
    QueryParams ListTestGridSessionActionsQueryParams 
    Headers ListTestGridSessionActionsHeaders 
    Request shared.ListTestGridSessionActionsRequest `request:"mediaType=application/json"`
    
}

type ListTestGridSessionActionsResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    ListTestGridSessionActionsResult *shared.ListTestGridSessionActionsResult 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

