package shared

// ConfigListItem
// An item in a list of <code>Config</code> objects.
type ConfigListItem struct {
	ConfigArn  *string                   `json:"configArn,omitempty"`
	ConfigID   *string                   `json:"configId,omitempty"`
	ConfigType *ConfigCapabilityTypeEnum `json:"configType,omitempty"`
	Name       *string                   `json:"name,omitempty"`
}
