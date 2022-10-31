package operations

import (
"time")


type GetDescribeEventsActionEnum string

const (
    GetDescribeEventsActionEnumDescribeEvents GetDescribeEventsActionEnum = "DescribeEvents"
)



type GetDescribeEventsSeverityEnum string

const (
    GetDescribeEventsSeverityEnumTrace GetDescribeEventsSeverityEnum = "TRACE"
GetDescribeEventsSeverityEnumDebug GetDescribeEventsSeverityEnum = "DEBUG"
GetDescribeEventsSeverityEnumInfo GetDescribeEventsSeverityEnum = "INFO"
GetDescribeEventsSeverityEnumWarn GetDescribeEventsSeverityEnum = "WARN"
GetDescribeEventsSeverityEnumError GetDescribeEventsSeverityEnum = "ERROR"
GetDescribeEventsSeverityEnumFatal GetDescribeEventsSeverityEnum = "FATAL"
)



type GetDescribeEventsVersionEnum string

const (
    GetDescribeEventsVersionEnumTwoThousandAndTen1201 GetDescribeEventsVersionEnum = "2010-12-01"
)


type GetDescribeEventsQueryParams struct {
    Action GetDescribeEventsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplicationName *string `queryParam:"style=form,explode=true,name=ApplicationName"`
    EndTime *time.Time `queryParam:"style=form,explode=true,name=EndTime"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PlatformArn *string `queryParam:"style=form,explode=true,name=PlatformArn"`
    RequestID *string `queryParam:"style=form,explode=true,name=RequestId"`
    Severity *GetDescribeEventsSeverityEnum `queryParam:"style=form,explode=true,name=Severity"`
    StartTime *time.Time `queryParam:"style=form,explode=true,name=StartTime"`
    TemplateName *string `queryParam:"style=form,explode=true,name=TemplateName"`
    Version GetDescribeEventsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VersionLabel *string `queryParam:"style=form,explode=true,name=VersionLabel"`
    
}

type GetDescribeEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeEventsRequest struct {
    QueryParams GetDescribeEventsQueryParams 
    Headers GetDescribeEventsHeaders 
    
}

type GetDescribeEventsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

