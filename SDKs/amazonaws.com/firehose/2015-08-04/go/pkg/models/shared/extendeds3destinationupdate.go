package shared

type ExtendedS3DestinationUpdate struct {
	BucketArn                         *string                            `json:"BucketARN,omitempty"`
	BufferingHints                    *BufferingHints                    `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions          `json:"CloudWatchLoggingOptions,omitempty"`
	CompressionFormat                 *CompressionFormatEnum             `json:"CompressionFormat,omitempty"`
	DataFormatConversionConfiguration *DataFormatConversionConfiguration `json:"DataFormatConversionConfiguration,omitempty"`
	DynamicPartitioningConfiguration  *DynamicPartitioningConfiguration  `json:"DynamicPartitioningConfiguration,omitempty"`
	EncryptionConfiguration           *EncryptionConfiguration           `json:"EncryptionConfiguration,omitempty"`
	ErrorOutputPrefix                 *string                            `json:"ErrorOutputPrefix,omitempty"`
	Prefix                            *string                            `json:"Prefix,omitempty"`
	ProcessingConfiguration           *ProcessingConfiguration           `json:"ProcessingConfiguration,omitempty"`
	RoleArn                           *string                            `json:"RoleARN,omitempty"`
	S3BackupMode                      *S3BackupModeEnum                  `json:"S3BackupMode,omitempty"`
	S3BackupUpdate                    *S3DestinationUpdate               `json:"S3BackupUpdate,omitempty"`
}
