package shared

type RetryBuildBatchInput struct {
	ID        *string                  `json:"id"`
	RetryType *RetryBuildBatchTypeEnum `json:"retryType"`
}
