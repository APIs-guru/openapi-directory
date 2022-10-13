package shared

type Destination struct {
	ConfigDetails             *ConfigDetails            `json:"configDetails"`
	ConfigID                  *string                   `json:"configId"`
	ConfigType                *ConfigCapabilityTypeEnum `json:"configType"`
	DataflowDestinationRegion *string                   `json:"dataflowDestinationRegion"`
}
