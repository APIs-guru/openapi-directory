package shared

type S3DestinationUpdate struct {
	BucketArn                *string                   `json:"BucketARN,omitempty"`
	BufferingHints           *BufferingHints           `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	CompressionFormat        *CompressionFormatEnum    `json:"CompressionFormat,omitempty"`
	EncryptionConfiguration  *EncryptionConfiguration  `json:"EncryptionConfiguration,omitempty"`
	ErrorOutputPrefix        *string                   `json:"ErrorOutputPrefix,omitempty"`
	Prefix                   *string                   `json:"Prefix,omitempty"`
	RoleArn                  *string                   `json:"RoleARN,omitempty"`
}
