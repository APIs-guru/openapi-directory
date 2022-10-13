package shared

type ConfigTypeData struct {
	AntennaDownlinkConfig            *AntennaDownlinkConfig            `json:"antennaDownlinkConfig"`
	AntennaDownlinkDemodDecodeConfig *AntennaDownlinkDemodDecodeConfig `json:"antennaDownlinkDemodDecodeConfig"`
	AntennaUplinkConfig              *AntennaUplinkConfig              `json:"antennaUplinkConfig"`
	DataflowEndpointConfig           *DataflowEndpointConfig           `json:"dataflowEndpointConfig"`
	S3RecordingConfig                *S3RecordingConfig                `json:"s3RecordingConfig"`
	TrackingConfig                   *TrackingConfig                   `json:"trackingConfig"`
	UplinkEchoConfig                 *UplinkEchoConfig                 `json:"uplinkEchoConfig"`
}
