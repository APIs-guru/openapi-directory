package shared

// S3Location
// The Amazon S3 artifact location for an action's artifacts.
type S3Location struct {
	Bucket *string `json:"bucket,omitempty"`
	Key    *string `json:"key,omitempty"`
}
