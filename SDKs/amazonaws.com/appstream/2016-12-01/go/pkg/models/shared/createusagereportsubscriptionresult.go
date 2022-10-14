package shared

type CreateUsageReportSubscriptionResult struct {
	S3BucketName *string                  `json:"S3BucketName,omitempty"`
	Schedule     *UsageReportScheduleEnum `json:"Schedule,omitempty"`
}
