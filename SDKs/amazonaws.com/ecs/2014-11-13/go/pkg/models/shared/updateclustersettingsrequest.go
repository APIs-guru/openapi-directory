package shared

type UpdateClusterSettingsRequest struct {
	Cluster  string           `json:"cluster"`
	Settings []ClusterSetting `json:"settings"`
}
