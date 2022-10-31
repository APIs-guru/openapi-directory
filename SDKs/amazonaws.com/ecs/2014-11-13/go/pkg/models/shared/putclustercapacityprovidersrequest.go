package shared

type PutClusterCapacityProvidersRequest struct {
	CapacityProviders               []string                       `json:"capacityProviders"`
	Cluster                         string                         `json:"cluster"`
	DefaultCapacityProviderStrategy []CapacityProviderStrategyItem `json:"defaultCapacityProviderStrategy"`
}
