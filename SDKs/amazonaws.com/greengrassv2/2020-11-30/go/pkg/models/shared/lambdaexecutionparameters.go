package shared

type LambdaExecutionParameters struct {
	EnvironmentVariables     map[string]string                   `json:"environmentVariables"`
	EventSources             []LambdaEventSource                 `json:"eventSources"`
	ExecArgs                 []string                            `json:"execArgs"`
	InputPayloadEncodingType *LambdaInputPayloadEncodingTypeEnum `json:"inputPayloadEncodingType"`
	LinuxProcessParams       *LambdaLinuxProcessParams           `json:"linuxProcessParams"`
	MaxIdleTimeInSeconds     *int64                              `json:"maxIdleTimeInSeconds"`
	MaxInstancesCount        *int64                              `json:"maxInstancesCount"`
	MaxQueueSize             *int64                              `json:"maxQueueSize"`
	Pinned                   *bool                               `json:"pinned"`
	StatusTimeoutInSeconds   *int64                              `json:"statusTimeoutInSeconds"`
	TimeoutInSeconds         *int64                              `json:"timeoutInSeconds"`
}
