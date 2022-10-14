package shared

type ConfigIDResponse struct {
	ConfigArn  *string                   `json:"configArn,omitempty"`
	ConfigID   *string                   `json:"configId,omitempty"`
	ConfigType *ConfigCapabilityTypeEnum `json:"configType,omitempty"`
}
