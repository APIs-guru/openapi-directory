package shared

type JobExecutionsRolloutConfig struct {
	ExponentialRate  *ExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                  `json:"maximumPerMinute,omitempty"`
}
