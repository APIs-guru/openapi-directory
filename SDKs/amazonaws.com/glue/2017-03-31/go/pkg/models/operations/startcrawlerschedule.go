package operations

import (
"openapi/pkg/models/shared")


type StartCrawlerScheduleXAmzTargetEnum string

const (
    StartCrawlerScheduleXAmzTargetEnumAwsGlueStartCrawlerSchedule StartCrawlerScheduleXAmzTargetEnum = "AWSGlue.StartCrawlerSchedule"
)


type StartCrawlerScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartCrawlerScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartCrawlerScheduleRequest struct {
    Headers StartCrawlerScheduleHeaders 
    Request shared.StartCrawlerScheduleRequest `request:"mediaType=application/json"`
    
}

type StartCrawlerScheduleResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    NoScheduleException *interface{} 
    OperationTimeoutException *interface{} 
    SchedulerRunningException *interface{} 
    SchedulerTransitioningException *interface{} 
    StartCrawlerScheduleResponse map[string]interface{} 
    StatusCode int64 
    
}

