package operations

import (
"openapi/pkg/models/shared")

type CreateScheduledAuditPathParams struct {
    ScheduledAuditName string `pathParam:"style=simple,explode=false,name=scheduledAuditName"`
    
}

type CreateScheduledAuditHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateScheduledAuditRequestBodyDayOfWeekEnum string

const (
    CreateScheduledAuditRequestBodyDayOfWeekEnumSun CreateScheduledAuditRequestBodyDayOfWeekEnum = "SUN"
CreateScheduledAuditRequestBodyDayOfWeekEnumMon CreateScheduledAuditRequestBodyDayOfWeekEnum = "MON"
CreateScheduledAuditRequestBodyDayOfWeekEnumTue CreateScheduledAuditRequestBodyDayOfWeekEnum = "TUE"
CreateScheduledAuditRequestBodyDayOfWeekEnumWed CreateScheduledAuditRequestBodyDayOfWeekEnum = "WED"
CreateScheduledAuditRequestBodyDayOfWeekEnumThu CreateScheduledAuditRequestBodyDayOfWeekEnum = "THU"
CreateScheduledAuditRequestBodyDayOfWeekEnumFri CreateScheduledAuditRequestBodyDayOfWeekEnum = "FRI"
CreateScheduledAuditRequestBodyDayOfWeekEnumSat CreateScheduledAuditRequestBodyDayOfWeekEnum = "SAT"
)



type CreateScheduledAuditRequestBodyFrequencyEnum string

const (
    CreateScheduledAuditRequestBodyFrequencyEnumDaily CreateScheduledAuditRequestBodyFrequencyEnum = "DAILY"
CreateScheduledAuditRequestBodyFrequencyEnumWeekly CreateScheduledAuditRequestBodyFrequencyEnum = "WEEKLY"
CreateScheduledAuditRequestBodyFrequencyEnumBiweekly CreateScheduledAuditRequestBodyFrequencyEnum = "BIWEEKLY"
CreateScheduledAuditRequestBodyFrequencyEnumMonthly CreateScheduledAuditRequestBodyFrequencyEnum = "MONTHLY"
)


type CreateScheduledAuditRequestBody struct {
    DayOfMonth *string `json:"dayOfMonth,omitempty"`
    DayOfWeek *CreateScheduledAuditRequestBodyDayOfWeekEnum `json:"dayOfWeek,omitempty"`
    Frequency CreateScheduledAuditRequestBodyFrequencyEnum `json:"frequency"`
    Tags []shared.Tag `json:"tags,omitempty"`
    TargetCheckNames []string `json:"targetCheckNames"`
    
}

type CreateScheduledAuditRequest struct {
    PathParams CreateScheduledAuditPathParams 
    Headers CreateScheduledAuditHeaders 
    Request CreateScheduledAuditRequestBody `request:"mediaType=application/json"`
    
}

type CreateScheduledAuditResponse struct {
    ContentType string 
    CreateScheduledAuditResponse *shared.CreateScheduledAuditResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

