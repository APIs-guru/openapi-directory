package shared

type ConfigDetails struct {
	AntennaDemodDecodeDetails *AntennaDemodDecodeDetails `json:"antennaDemodDecodeDetails,omitempty"`
	EndpointDetails           *EndpointDetails           `json:"endpointDetails,omitempty"`
	S3RecordingDetails        *S3RecordingDetails        `json:"s3RecordingDetails,omitempty"`
}
