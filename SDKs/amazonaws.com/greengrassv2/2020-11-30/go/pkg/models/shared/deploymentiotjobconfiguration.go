package shared

type DeploymentIoTJobConfiguration struct {
	AbortConfig                *IoTJobAbortConfig             `json:"abortConfig"`
	JobExecutionsRolloutConfig *IoTJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	TimeoutConfig              *IoTJobTimeoutConfig           `json:"timeoutConfig"`
}
