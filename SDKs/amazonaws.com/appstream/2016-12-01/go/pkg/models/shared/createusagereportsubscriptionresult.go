package shared

type CreateUsageReportSubscriptionResult struct {
	S3BucketName *string                  `json:"S3BucketName"`
	Schedule     *UsageReportScheduleEnum `json:"Schedule"`
}
