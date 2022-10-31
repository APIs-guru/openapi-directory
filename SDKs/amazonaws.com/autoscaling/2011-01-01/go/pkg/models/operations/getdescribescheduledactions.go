package operations

import (
"time")


type GetDescribeScheduledActionsActionEnum string

const (
    GetDescribeScheduledActionsActionEnumDescribeScheduledActions GetDescribeScheduledActionsActionEnum = "DescribeScheduledActions"
)



type GetDescribeScheduledActionsVersionEnum string

const (
    GetDescribeScheduledActionsVersionEnumTwoThousandAndEleven0101 GetDescribeScheduledActionsVersionEnum = "2011-01-01"
)


type GetDescribeScheduledActionsQueryParams struct {
    Action GetDescribeScheduledActionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName *string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    EndTime *time.Time `queryParam:"style=form,explode=true,name=EndTime"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    ScheduledActionNames []string `queryParam:"style=form,explode=true,name=ScheduledActionNames"`
    StartTime *time.Time `queryParam:"style=form,explode=true,name=StartTime"`
    Version GetDescribeScheduledActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeScheduledActionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeScheduledActionsRequest struct {
    QueryParams GetDescribeScheduledActionsQueryParams 
    Headers GetDescribeScheduledActionsHeaders 
    
}

type GetDescribeScheduledActionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

