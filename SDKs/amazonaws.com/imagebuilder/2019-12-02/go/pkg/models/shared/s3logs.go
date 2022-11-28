package shared

// S3Logs
// Amazon S3 logging configuration.
type S3Logs struct {
	S3BucketName *string `json:"s3BucketName,omitempty"`
	S3KeyPrefix  *string `json:"s3KeyPrefix,omitempty"`
}
