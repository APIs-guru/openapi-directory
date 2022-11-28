package shared

// ConfigDetails
// Details for certain <code>Config</code> object types in a contact.
type ConfigDetails struct {
	AntennaDemodDecodeDetails *AntennaDemodDecodeDetails `json:"antennaDemodDecodeDetails,omitempty"`
	EndpointDetails           *EndpointDetails           `json:"endpointDetails,omitempty"`
	S3RecordingDetails        *S3RecordingDetails        `json:"s3RecordingDetails,omitempty"`
}
