package shared

type CreateClusterRequest struct {
	CapacityProviders               []string                       `json:"capacityProviders"`
	ClusterName                     *string                        `json:"clusterName"`
	Configuration                   *ClusterConfiguration          `json:"configuration"`
	DefaultCapacityProviderStrategy []CapacityProviderStrategyItem `json:"defaultCapacityProviderStrategy"`
	Settings                        []ClusterSetting               `json:"settings"`
	Tags                            []Tag                          `json:"tags"`
}
