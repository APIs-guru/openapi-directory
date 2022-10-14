package shared

import (
	"time"
)

type UsageReportSubscription struct {
	LastGeneratedReportDate *time.Time                           `json:"LastGeneratedReportDate,omitempty"`
	S3BucketName            *string                              `json:"S3BucketName,omitempty"`
	Schedule                *UsageReportScheduleEnum             `json:"Schedule,omitempty"`
	SubscriptionErrors      []LastReportGenerationExecutionError `json:"SubscriptionErrors,omitempty"`
}
