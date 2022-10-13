package shared

type ConfigDetails struct {
	AntennaDemodDecodeDetails *AntennaDemodDecodeDetails `json:"antennaDemodDecodeDetails"`
	EndpointDetails           *EndpointDetails           `json:"endpointDetails"`
	S3RecordingDetails        *S3RecordingDetails        `json:"s3RecordingDetails"`
}
