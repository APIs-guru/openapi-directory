package shared

// ExecuteCommandLogConfiguration
// The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
type ExecuteCommandLogConfiguration struct {
	CloudWatchEncryptionEnabled *bool   `json:"cloudWatchEncryptionEnabled,omitempty"`
	CloudWatchLogGroupName      *string `json:"cloudWatchLogGroupName,omitempty"`
	S3BucketName                *string `json:"s3BucketName,omitempty"`
	S3EncryptionEnabled         *bool   `json:"s3EncryptionEnabled,omitempty"`
	S3KeyPrefix                 *string `json:"s3KeyPrefix,omitempty"`
}
