package shared

// IoTJobTimeoutConfig
// Contains information about the timeout configuration for a job.
type IoTJobTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes,omitempty"`
}
