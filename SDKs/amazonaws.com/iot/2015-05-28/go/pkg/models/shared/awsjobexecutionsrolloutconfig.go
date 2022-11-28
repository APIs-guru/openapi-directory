package shared

// AwsJobExecutionsRolloutConfig
// Configuration for the rollout of OTA updates.
type AwsJobExecutionsRolloutConfig struct {
	ExponentialRate  *AwsJobExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                        `json:"maximumPerMinute,omitempty"`
}
