package shared

type Source struct {
	ConfigDetails        *ConfigDetails            `json:"configDetails"`
	ConfigID             *string                   `json:"configId"`
	ConfigType           *ConfigCapabilityTypeEnum `json:"configType"`
	DataflowSourceRegion *string                   `json:"dataflowSourceRegion"`
}
