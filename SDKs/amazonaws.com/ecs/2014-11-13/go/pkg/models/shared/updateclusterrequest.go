package shared

type UpdateClusterRequest struct {
	Cluster       string                `json:"cluster"`
	Configuration *ClusterConfiguration `json:"configuration,omitempty"`
	Settings      []ClusterSetting      `json:"settings,omitempty"`
}
