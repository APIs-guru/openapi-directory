package shared

type ConfigIDResponse struct {
	ConfigArn  *string                   `json:"configArn"`
	ConfigID   *string                   `json:"configId"`
	ConfigType *ConfigCapabilityTypeEnum `json:"configType"`
}
