package shared

type ExtendedS3DestinationConfiguration struct {
	BucketArn                         string                             `json:"BucketARN"`
	BufferingHints                    *BufferingHints                    `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions          `json:"CloudWatchLoggingOptions,omitempty"`
	CompressionFormat                 *CompressionFormatEnum             `json:"CompressionFormat,omitempty"`
	DataFormatConversionConfiguration *DataFormatConversionConfiguration `json:"DataFormatConversionConfiguration,omitempty"`
	DynamicPartitioningConfiguration  *DynamicPartitioningConfiguration  `json:"DynamicPartitioningConfiguration,omitempty"`
	EncryptionConfiguration           *EncryptionConfiguration           `json:"EncryptionConfiguration,omitempty"`
	ErrorOutputPrefix                 *string                            `json:"ErrorOutputPrefix,omitempty"`
	Prefix                            *string                            `json:"Prefix,omitempty"`
	ProcessingConfiguration           *ProcessingConfiguration           `json:"ProcessingConfiguration,omitempty"`
	RoleArn                           string                             `json:"RoleARN"`
	S3BackupConfiguration             *S3DestinationConfiguration        `json:"S3BackupConfiguration,omitempty"`
	S3BackupMode                      *S3BackupModeEnum                  `json:"S3BackupMode,omitempty"`
}
