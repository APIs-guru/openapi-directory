package shared

type ExecuteCommandLogConfiguration struct {
	CloudWatchEncryptionEnabled *bool   `json:"cloudWatchEncryptionEnabled,omitempty"`
	CloudWatchLogGroupName      *string `json:"cloudWatchLogGroupName,omitempty"`
	S3BucketName                *string `json:"s3BucketName,omitempty"`
	S3EncryptionEnabled         *bool   `json:"s3EncryptionEnabled,omitempty"`
	S3KeyPrefix                 *string `json:"s3KeyPrefix,omitempty"`
}
