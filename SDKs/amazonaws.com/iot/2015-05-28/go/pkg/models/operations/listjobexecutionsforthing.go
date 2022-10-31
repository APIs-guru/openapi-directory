package operations

import (
"openapi/pkg/models/shared")

type ListJobExecutionsForThingPathParams struct {
    ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
    
}


type ListJobExecutionsForThingStatusEnum string

const (
    ListJobExecutionsForThingStatusEnumQueued ListJobExecutionsForThingStatusEnum = "QUEUED"
ListJobExecutionsForThingStatusEnumInProgress ListJobExecutionsForThingStatusEnum = "IN_PROGRESS"
ListJobExecutionsForThingStatusEnumSucceeded ListJobExecutionsForThingStatusEnum = "SUCCEEDED"
ListJobExecutionsForThingStatusEnumFailed ListJobExecutionsForThingStatusEnum = "FAILED"
ListJobExecutionsForThingStatusEnumTimedOut ListJobExecutionsForThingStatusEnum = "TIMED_OUT"
ListJobExecutionsForThingStatusEnumRejected ListJobExecutionsForThingStatusEnum = "REJECTED"
ListJobExecutionsForThingStatusEnumRemoved ListJobExecutionsForThingStatusEnum = "REMOVED"
ListJobExecutionsForThingStatusEnumCanceled ListJobExecutionsForThingStatusEnum = "CANCELED"
)


type ListJobExecutionsForThingQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NamespaceID *string `queryParam:"style=form,explode=true,name=namespaceId"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    Status *ListJobExecutionsForThingStatusEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type ListJobExecutionsForThingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListJobExecutionsForThingRequest struct {
    PathParams ListJobExecutionsForThingPathParams 
    QueryParams ListJobExecutionsForThingQueryParams 
    Headers ListJobExecutionsForThingHeaders 
    
}

type ListJobExecutionsForThingResponse struct {
    ContentType string 
    InvalidRequestException *interface{} 
    ListJobExecutionsForThingResponse *shared.ListJobExecutionsForThingResponse 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

