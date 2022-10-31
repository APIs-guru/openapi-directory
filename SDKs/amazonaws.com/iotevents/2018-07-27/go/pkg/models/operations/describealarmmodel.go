package operations

import (
"openapi/pkg/models/shared")

type DescribeAlarmModelPathParams struct {
    AlarmModelName string `pathParam:"style=simple,explode=false,name=alarmModelName"`
    
}

type DescribeAlarmModelQueryParams struct {
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type DescribeAlarmModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeAlarmModelRequest struct {
    PathParams DescribeAlarmModelPathParams 
    QueryParams DescribeAlarmModelQueryParams 
    Headers DescribeAlarmModelHeaders 
    
}

type DescribeAlarmModelResponse struct {
    ContentType string 
    DescribeAlarmModelResponse *shared.DescribeAlarmModelResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

