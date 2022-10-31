package shared



type BatchGetResourceConfigResponse struct {
    BaseConfigurationItems []BaseConfigurationItem `json:"baseConfigurationItems,omitempty"`
    UnprocessedResourceKeys []ResourceKey `json:"unprocessedResourceKeys,omitempty"`
    
}

