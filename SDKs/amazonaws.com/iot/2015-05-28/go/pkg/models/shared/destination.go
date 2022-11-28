package shared

// Destination
// Describes the location of the updated firmware.
type Destination struct {
	S3Destination *S3Destination `json:"s3Destination,omitempty"`
}
