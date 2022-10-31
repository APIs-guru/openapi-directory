package shared

type LambdaExecutionParameters struct {
	EnvironmentVariables     map[string]string                   `json:"environmentVariables,omitempty"`
	EventSources             []LambdaEventSource                 `json:"eventSources,omitempty"`
	ExecArgs                 []string                            `json:"execArgs,omitempty"`
	InputPayloadEncodingType *LambdaInputPayloadEncodingTypeEnum `json:"inputPayloadEncodingType,omitempty"`
	LinuxProcessParams       *LambdaLinuxProcessParams           `json:"linuxProcessParams,omitempty"`
	MaxIdleTimeInSeconds     *int64                              `json:"maxIdleTimeInSeconds,omitempty"`
	MaxInstancesCount        *int64                              `json:"maxInstancesCount,omitempty"`
	MaxQueueSize             *int64                              `json:"maxQueueSize,omitempty"`
	Pinned                   *bool                               `json:"pinned,omitempty"`
	StatusTimeoutInSeconds   *int64                              `json:"statusTimeoutInSeconds,omitempty"`
	TimeoutInSeconds         *int64                              `json:"timeoutInSeconds,omitempty"`
}
