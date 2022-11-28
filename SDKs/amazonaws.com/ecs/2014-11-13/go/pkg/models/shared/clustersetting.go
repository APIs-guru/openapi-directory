package shared

// ClusterSetting
// The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
type ClusterSetting struct {
	Name  *ClusterSettingNameEnum `json:"name,omitempty"`
	Value *string                 `json:"value,omitempty"`
}
