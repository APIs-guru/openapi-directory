package shared

import (
	"time"
)

type UsageReportSubscription struct {
	LastGeneratedReportDate *time.Time                           `json:"LastGeneratedReportDate"`
	S3BucketName            *string                              `json:"S3BucketName"`
	Schedule                *UsageReportScheduleEnum             `json:"Schedule"`
	SubscriptionErrors      []LastReportGenerationExecutionError `json:"SubscriptionErrors"`
}
