package shared

type ExtendedS3DestinationConfiguration struct {
	BucketArn                         string                             `json:"BucketARN"`
	BufferingHints                    *BufferingHints                    `json:"BufferingHints"`
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions          `json:"CloudWatchLoggingOptions"`
	CompressionFormat                 *CompressionFormatEnum             `json:"CompressionFormat"`
	DataFormatConversionConfiguration *DataFormatConversionConfiguration `json:"DataFormatConversionConfiguration"`
	DynamicPartitioningConfiguration  *DynamicPartitioningConfiguration  `json:"DynamicPartitioningConfiguration"`
	EncryptionConfiguration           *EncryptionConfiguration           `json:"EncryptionConfiguration"`
	ErrorOutputPrefix                 *string                            `json:"ErrorOutputPrefix"`
	Prefix                            *string                            `json:"Prefix"`
	ProcessingConfiguration           *ProcessingConfiguration           `json:"ProcessingConfiguration"`
	RoleArn                           string                             `json:"RoleARN"`
	S3BackupConfiguration             *S3DestinationConfiguration        `json:"S3BackupConfiguration"`
	S3BackupMode                      *S3BackupModeEnum                  `json:"S3BackupMode"`
}
