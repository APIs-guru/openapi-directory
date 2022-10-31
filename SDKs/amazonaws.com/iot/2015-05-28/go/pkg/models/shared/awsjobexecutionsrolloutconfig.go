package shared



type AwsJobExecutionsRolloutConfig struct {
    ExponentialRate *AwsJobExponentialRolloutRate `json:"exponentialRate,omitempty"`
    MaximumPerMinute *int64 `json:"maximumPerMinute,omitempty"`
    
}

