package shared

type ExecuteCommandLogConfiguration struct {
	CloudWatchEncryptionEnabled *bool   `json:"cloudWatchEncryptionEnabled"`
	CloudWatchLogGroupName      *string `json:"cloudWatchLogGroupName"`
	S3BucketName                *string `json:"s3BucketName"`
	S3EncryptionEnabled         *bool   `json:"s3EncryptionEnabled"`
	S3KeyPrefix                 *string `json:"s3KeyPrefix"`
}
