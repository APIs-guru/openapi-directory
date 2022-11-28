package shared

// DeploymentIoTJobConfiguration
// Contains information about an IoT job configuration.
type DeploymentIoTJobConfiguration struct {
	AbortConfig                *IoTJobAbortConfig             `json:"abortConfig,omitempty"`
	JobExecutionsRolloutConfig *IoTJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
	TimeoutConfig              *IoTJobTimeoutConfig           `json:"timeoutConfig,omitempty"`
}
