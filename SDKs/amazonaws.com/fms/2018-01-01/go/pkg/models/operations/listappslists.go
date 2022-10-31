package operations

import (
"openapi/pkg/models/shared")

type ListAppsListsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAppsListsXAmzTargetEnum string

const (
    ListAppsListsXAmzTargetEnumAwsfms20180101ListAppsLists ListAppsListsXAmzTargetEnum = "AWSFMS_20180101.ListAppsLists"
)


type ListAppsListsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAppsListsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAppsListsRequest struct {
    QueryParams ListAppsListsQueryParams 
    Headers ListAppsListsHeaders 
    Request shared.ListAppsListsRequest `request:"mediaType=application/json"`
    
}

type ListAppsListsResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidOperationException *interface{} 
    LimitExceededException *interface{} 
    ListAppsListsResponse *shared.ListAppsListsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

