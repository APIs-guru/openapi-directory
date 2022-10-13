package shared

type ExtendedS3DestinationDescription struct {
	BucketArn                         string                             `json:"BucketARN"`
	BufferingHints                    BufferingHints                     `json:"BufferingHints"`
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions          `json:"CloudWatchLoggingOptions"`
	CompressionFormat                 CompressionFormatEnum              `json:"CompressionFormat"`
	DataFormatConversionConfiguration *DataFormatConversionConfiguration `json:"DataFormatConversionConfiguration"`
	DynamicPartitioningConfiguration  *DynamicPartitioningConfiguration  `json:"DynamicPartitioningConfiguration"`
	EncryptionConfiguration           EncryptionConfiguration            `json:"EncryptionConfiguration"`
	ErrorOutputPrefix                 *string                            `json:"ErrorOutputPrefix"`
	Prefix                            *string                            `json:"Prefix"`
	ProcessingConfiguration           *ProcessingConfiguration           `json:"ProcessingConfiguration"`
	RoleArn                           string                             `json:"RoleARN"`
	S3BackupDescription               *S3DestinationDescription          `json:"S3BackupDescription"`
	S3BackupMode                      *S3BackupModeEnum                  `json:"S3BackupMode"`
}
