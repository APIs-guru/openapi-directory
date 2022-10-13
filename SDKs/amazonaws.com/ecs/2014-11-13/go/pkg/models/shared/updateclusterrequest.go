package shared

type UpdateClusterRequest struct {
	Cluster       string                `json:"cluster"`
	Configuration *ClusterConfiguration `json:"configuration"`
	Settings      []ClusterSetting      `json:"settings"`
}
