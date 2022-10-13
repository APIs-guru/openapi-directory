package shared

type IoTJobExecutionsRolloutConfig struct {
	ExponentialRate  *IoTJobExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                        `json:"maximumPerMinute"`
}
