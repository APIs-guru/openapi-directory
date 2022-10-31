package shared



type Source struct {
    ConfigDetails *ConfigDetails `json:"configDetails,omitempty"`
    ConfigID *string `json:"configId,omitempty"`
    ConfigType *ConfigCapabilityTypeEnum `json:"configType,omitempty"`
    DataflowSourceRegion *string `json:"dataflowSourceRegion,omitempty"`
    
}

