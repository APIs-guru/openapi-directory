package shared

// RetryPolicy
// A <code>RetryPolicy</code> object that includes information about the retry policy settings.
type RetryPolicy struct {
	MaximumEventAgeInSeconds *int64 `json:"MaximumEventAgeInSeconds,omitempty"`
	MaximumRetryAttempts     *int64 `json:"MaximumRetryAttempts,omitempty"`
}
