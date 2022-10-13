package shared

type S3DestinationConfiguration struct {
	BucketArn                string                    `json:"BucketARN"`
	BufferingHints           *BufferingHints           `json:"BufferingHints"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions"`
	CompressionFormat        *CompressionFormatEnum    `json:"CompressionFormat"`
	EncryptionConfiguration  *EncryptionConfiguration  `json:"EncryptionConfiguration"`
	ErrorOutputPrefix        *string                   `json:"ErrorOutputPrefix"`
	Prefix                   *string                   `json:"Prefix"`
	RoleArn                  string                    `json:"RoleARN"`
}
