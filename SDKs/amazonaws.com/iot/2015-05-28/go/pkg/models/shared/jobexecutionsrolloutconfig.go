package shared

// JobExecutionsRolloutConfig
// Allows you to create a staged rollout of a job.
type JobExecutionsRolloutConfig struct {
	ExponentialRate  *ExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                  `json:"maximumPerMinute,omitempty"`
}
