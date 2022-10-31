package shared



type ExtendedS3DestinationDescription struct {
    BucketArn string `json:"BucketARN"`
    BufferingHints BufferingHints `json:"BufferingHints"`
    CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
    CompressionFormat CompressionFormatEnum `json:"CompressionFormat"`
    DataFormatConversionConfiguration *DataFormatConversionConfiguration `json:"DataFormatConversionConfiguration,omitempty"`
    DynamicPartitioningConfiguration *DynamicPartitioningConfiguration `json:"DynamicPartitioningConfiguration,omitempty"`
    EncryptionConfiguration EncryptionConfiguration `json:"EncryptionConfiguration"`
    ErrorOutputPrefix *string `json:"ErrorOutputPrefix,omitempty"`
    Prefix *string `json:"Prefix,omitempty"`
    ProcessingConfiguration *ProcessingConfiguration `json:"ProcessingConfiguration,omitempty"`
    RoleArn string `json:"RoleARN"`
    S3BackupDescription *S3DestinationDescription `json:"S3BackupDescription,omitempty"`
    S3BackupMode *S3BackupModeEnum `json:"S3BackupMode,omitempty"`
    
}

