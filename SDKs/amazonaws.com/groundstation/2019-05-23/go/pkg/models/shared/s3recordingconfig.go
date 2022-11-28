package shared

// S3RecordingConfig
// Information about an S3 recording <code>Config</code>.
type S3RecordingConfig struct {
	BucketArn string  `json:"bucketArn"`
	Prefix    *string `json:"prefix,omitempty"`
	RoleArn   string  `json:"roleArn"`
}
