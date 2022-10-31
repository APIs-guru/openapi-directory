package shared



type CreateClusterRequest struct {
    CapacityProviders []string `json:"capacityProviders,omitempty"`
    ClusterName *string `json:"clusterName,omitempty"`
    Configuration *ClusterConfiguration `json:"configuration,omitempty"`
    DefaultCapacityProviderStrategy []CapacityProviderStrategyItem `json:"defaultCapacityProviderStrategy,omitempty"`
    Settings []ClusterSetting `json:"settings,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

