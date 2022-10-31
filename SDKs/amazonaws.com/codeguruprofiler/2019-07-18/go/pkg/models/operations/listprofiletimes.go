package operations

import (
"time"
"openapi/pkg/models/shared")

type ListProfileTimesPathParams struct {
    ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
    
}


type ListProfileTimesOrderByEnum string

const (
    ListProfileTimesOrderByEnumTimestampDescending ListProfileTimesOrderByEnum = "TimestampDescending"
ListProfileTimesOrderByEnumTimestampAscending ListProfileTimesOrderByEnum = "TimestampAscending"
)



type ListProfileTimesPeriodEnum string

const (
    ListProfileTimesPeriodEnumPt5M ListProfileTimesPeriodEnum = "PT5M"
ListProfileTimesPeriodEnumPt1H ListProfileTimesPeriodEnum = "PT1H"
ListProfileTimesPeriodEnumP1D ListProfileTimesPeriodEnum = "P1D"
)


type ListProfileTimesQueryParams struct {
    EndTime time.Time `queryParam:"style=form,explode=true,name=endTime"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    OrderBy *ListProfileTimesOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    Period ListProfileTimesPeriodEnum `queryParam:"style=form,explode=true,name=period"`
    StartTime time.Time `queryParam:"style=form,explode=true,name=startTime"`
    
}

type ListProfileTimesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListProfileTimesRequest struct {
    PathParams ListProfileTimesPathParams 
    QueryParams ListProfileTimesQueryParams 
    Headers ListProfileTimesHeaders 
    
}

type ListProfileTimesResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ListProfileTimesResponse *shared.ListProfileTimesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

