package shared

// S3RecordingDetails
// Details about an S3 recording <code>Config</code> used in a contact.
type S3RecordingDetails struct {
	BucketArn   *string `json:"bucketArn,omitempty"`
	KeyTemplate *string `json:"keyTemplate,omitempty"`
}
