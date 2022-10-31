package shared



type RetryPolicy struct {
    MaximumEventAgeInSeconds *int64 `json:"MaximumEventAgeInSeconds,omitempty"`
    MaximumRetryAttempts *int64 `json:"MaximumRetryAttempts,omitempty"`
    
}

