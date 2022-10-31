package shared



type ConfigTypeData struct {
    AntennaDownlinkConfig *AntennaDownlinkConfig `json:"antennaDownlinkConfig,omitempty"`
    AntennaDownlinkDemodDecodeConfig *AntennaDownlinkDemodDecodeConfig `json:"antennaDownlinkDemodDecodeConfig,omitempty"`
    AntennaUplinkConfig *AntennaUplinkConfig `json:"antennaUplinkConfig,omitempty"`
    DataflowEndpointConfig *DataflowEndpointConfig `json:"dataflowEndpointConfig,omitempty"`
    S3RecordingConfig *S3RecordingConfig `json:"s3RecordingConfig,omitempty"`
    TrackingConfig *TrackingConfig `json:"trackingConfig,omitempty"`
    UplinkEchoConfig *UplinkEchoConfig `json:"uplinkEchoConfig,omitempty"`
    
}

