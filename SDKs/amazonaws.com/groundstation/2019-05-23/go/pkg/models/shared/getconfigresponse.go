package shared

// GetConfigResponse
// <p/>
type GetConfigResponse struct {
	ConfigArn  string                    `json:"configArn"`
	ConfigData ConfigTypeData            `json:"configData"`
	ConfigID   string                    `json:"configId"`
	ConfigType *ConfigCapabilityTypeEnum `json:"configType,omitempty"`
	Name       string                    `json:"name"`
	Tags       map[string]string         `json:"tags,omitempty"`
}
