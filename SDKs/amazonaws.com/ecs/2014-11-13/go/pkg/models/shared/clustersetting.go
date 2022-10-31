package shared



type ClusterSetting struct {
    Name *ClusterSettingNameEnum `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

