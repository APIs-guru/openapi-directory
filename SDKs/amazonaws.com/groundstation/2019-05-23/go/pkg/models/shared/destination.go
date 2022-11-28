package shared

// Destination
// Dataflow details for the destination side.
type Destination struct {
	ConfigDetails             *ConfigDetails            `json:"configDetails,omitempty"`
	ConfigID                  *string                   `json:"configId,omitempty"`
	ConfigType                *ConfigCapabilityTypeEnum `json:"configType,omitempty"`
	DataflowDestinationRegion *string                   `json:"dataflowDestinationRegion,omitempty"`
}
