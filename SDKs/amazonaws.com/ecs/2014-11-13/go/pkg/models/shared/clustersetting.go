package shared

type ClusterSetting struct {
	Name  *ClusterSettingNameEnum `json:"name"`
	Value *string                 `json:"value"`
}
