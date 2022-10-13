package shared

type AwsJobExecutionsRolloutConfig struct {
	ExponentialRate  *AwsJobExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                        `json:"maximumPerMinute"`
}
