package shared

// IoTJobExecutionsRolloutConfig
// Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
type IoTJobExecutionsRolloutConfig struct {
	ExponentialRate  *IoTJobExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                        `json:"maximumPerMinute,omitempty"`
}
