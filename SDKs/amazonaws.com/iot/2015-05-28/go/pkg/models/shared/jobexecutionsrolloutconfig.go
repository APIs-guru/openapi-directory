package shared

type JobExecutionsRolloutConfig struct {
	ExponentialRate  *ExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                  `json:"maximumPerMinute"`
}
