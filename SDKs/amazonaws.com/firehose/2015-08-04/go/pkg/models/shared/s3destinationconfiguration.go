package shared

// S3DestinationConfiguration
// Describes the configuration of a destination in Amazon S3.
type S3DestinationConfiguration struct {
	BucketArn                string                    `json:"BucketARN"`
	BufferingHints           *BufferingHints           `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	CompressionFormat        *CompressionFormatEnum    `json:"CompressionFormat,omitempty"`
	EncryptionConfiguration  *EncryptionConfiguration  `json:"EncryptionConfiguration,omitempty"`
	ErrorOutputPrefix        *string                   `json:"ErrorOutputPrefix,omitempty"`
	Prefix                   *string                   `json:"Prefix,omitempty"`
	RoleArn                  string                    `json:"RoleARN"`
}
