package shared



type DeploymentIoTJobConfiguration struct {
    AbortConfig *IoTJobAbortConfig `json:"abortConfig,omitempty"`
    JobExecutionsRolloutConfig *IoTJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
    TimeoutConfig *IoTJobTimeoutConfig `json:"timeoutConfig,omitempty"`
    
}

