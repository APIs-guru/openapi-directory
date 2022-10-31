package shared



type S3DestinationDescription struct {
    BucketArn string `json:"BucketARN"`
    BufferingHints BufferingHints `json:"BufferingHints"`
    CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
    CompressionFormat CompressionFormatEnum `json:"CompressionFormat"`
    EncryptionConfiguration EncryptionConfiguration `json:"EncryptionConfiguration"`
    ErrorOutputPrefix *string `json:"ErrorOutputPrefix,omitempty"`
    Prefix *string `json:"Prefix,omitempty"`
    RoleArn string `json:"RoleARN"`
    
}

