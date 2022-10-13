package shared

type ConfigListItem struct {
	ConfigArn  *string                   `json:"configArn"`
	ConfigID   *string                   `json:"configId"`
	ConfigType *ConfigCapabilityTypeEnum `json:"configType"`
	Name       *string                   `json:"name"`
}
