package shared

type RetryBuildBatchInput struct {
	ID        *string                  `json:"id,omitempty"`
	RetryType *RetryBuildBatchTypeEnum `json:"retryType,omitempty"`
}
