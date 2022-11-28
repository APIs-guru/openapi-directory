package shared

// ConfigTypeData
// <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
type ConfigTypeData struct {
	AntennaDownlinkConfig            *AntennaDownlinkConfig            `json:"antennaDownlinkConfig,omitempty"`
	AntennaDownlinkDemodDecodeConfig *AntennaDownlinkDemodDecodeConfig `json:"antennaDownlinkDemodDecodeConfig,omitempty"`
	AntennaUplinkConfig              *AntennaUplinkConfig              `json:"antennaUplinkConfig,omitempty"`
	DataflowEndpointConfig           *DataflowEndpointConfig           `json:"dataflowEndpointConfig,omitempty"`
	S3RecordingConfig                *S3RecordingConfig                `json:"s3RecordingConfig,omitempty"`
	TrackingConfig                   *TrackingConfig                   `json:"trackingConfig,omitempty"`
	UplinkEchoConfig                 *UplinkEchoConfig                 `json:"uplinkEchoConfig,omitempty"`
}
