package shared

type RetryPolicy struct {
	MaximumEventAgeInSeconds *int64 `json:"MaximumEventAgeInSeconds"`
	MaximumRetryAttempts     *int64 `json:"MaximumRetryAttempts"`
}
