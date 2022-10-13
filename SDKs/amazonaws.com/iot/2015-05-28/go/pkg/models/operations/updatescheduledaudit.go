package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScheduledAuditPathParams struct {
	ScheduledAuditName string `pathParam:"style=simple,explode=false,name=scheduledAuditName"`
}

type UpdateScheduledAuditHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateScheduledAuditRequestBodyDayOfWeekEnum string

const (
	UpdateScheduledAuditRequestBodyDayOfWeekEnumSun UpdateScheduledAuditRequestBodyDayOfWeekEnum = "SUN"
	UpdateScheduledAuditRequestBodyDayOfWeekEnumMon UpdateScheduledAuditRequestBodyDayOfWeekEnum = "MON"
	UpdateScheduledAuditRequestBodyDayOfWeekEnumTue UpdateScheduledAuditRequestBodyDayOfWeekEnum = "TUE"
	UpdateScheduledAuditRequestBodyDayOfWeekEnumWed UpdateScheduledAuditRequestBodyDayOfWeekEnum = "WED"
	UpdateScheduledAuditRequestBodyDayOfWeekEnumThu UpdateScheduledAuditRequestBodyDayOfWeekEnum = "THU"
	UpdateScheduledAuditRequestBodyDayOfWeekEnumFri UpdateScheduledAuditRequestBodyDayOfWeekEnum = "FRI"
	UpdateScheduledAuditRequestBodyDayOfWeekEnumSat UpdateScheduledAuditRequestBodyDayOfWeekEnum = "SAT"
)

type UpdateScheduledAuditRequestBodyFrequencyEnum string

const (
	UpdateScheduledAuditRequestBodyFrequencyEnumDaily    UpdateScheduledAuditRequestBodyFrequencyEnum = "DAILY"
	UpdateScheduledAuditRequestBodyFrequencyEnumWeekly   UpdateScheduledAuditRequestBodyFrequencyEnum = "WEEKLY"
	UpdateScheduledAuditRequestBodyFrequencyEnumBiweekly UpdateScheduledAuditRequestBodyFrequencyEnum = "BIWEEKLY"
	UpdateScheduledAuditRequestBodyFrequencyEnumMonthly  UpdateScheduledAuditRequestBodyFrequencyEnum = "MONTHLY"
)

type UpdateScheduledAuditRequestBody struct {
	DayOfMonth       *string                                       `json:"dayOfMonth"`
	DayOfWeek        *UpdateScheduledAuditRequestBodyDayOfWeekEnum `json:"dayOfWeek"`
	Frequency        *UpdateScheduledAuditRequestBodyFrequencyEnum `json:"frequency"`
	TargetCheckNames []string                                      `json:"targetCheckNames"`
}

type UpdateScheduledAuditRequest struct {
	PathParams UpdateScheduledAuditPathParams
	Headers    UpdateScheduledAuditHeaders
	Request    UpdateScheduledAuditRequestBody `request:"mediaType=application/json"`
}

type UpdateScheduledAuditResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UpdateScheduledAuditResponse *shared.UpdateScheduledAuditResponse
}
