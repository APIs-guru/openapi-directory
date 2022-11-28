package shared

// S3Destination
// Describes the location of updated firmware in S3.
type S3Destination struct {
	Bucket *string `json:"bucket,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
}
