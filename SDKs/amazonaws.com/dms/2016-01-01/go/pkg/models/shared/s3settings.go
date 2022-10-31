package shared



type S3Settings struct {
    AddColumnName *bool `json:"AddColumnName,omitempty"`
    BucketFolder *string `json:"BucketFolder,omitempty"`
    BucketName *string `json:"BucketName,omitempty"`
    CannedACLForObjects *CannedACLForObjectsValueEnum `json:"CannedAclForObjects,omitempty"`
    CdcInsertsAndUpdates *bool `json:"CdcInsertsAndUpdates,omitempty"`
    CdcInsertsOnly *bool `json:"CdcInsertsOnly,omitempty"`
    CdcMaxBatchInterval *int64 `json:"CdcMaxBatchInterval,omitempty"`
    CdcMinFileSize *int64 `json:"CdcMinFileSize,omitempty"`
    CdcPath *string `json:"CdcPath,omitempty"`
    CompressionType *CompressionTypeValueEnum `json:"CompressionType,omitempty"`
    CsvDelimiter *string `json:"CsvDelimiter,omitempty"`
    CsvNoSupValue *string `json:"CsvNoSupValue,omitempty"`
    CsvNullValue *string `json:"CsvNullValue,omitempty"`
    CsvRowDelimiter *string `json:"CsvRowDelimiter,omitempty"`
    DataFormat *DataFormatValueEnum `json:"DataFormat,omitempty"`
    DataPageSize *int64 `json:"DataPageSize,omitempty"`
    DatePartitionDelimiter *DatePartitionDelimiterValueEnum `json:"DatePartitionDelimiter,omitempty"`
    DatePartitionEnabled *bool `json:"DatePartitionEnabled,omitempty"`
    DatePartitionSequence *DatePartitionSequenceValueEnum `json:"DatePartitionSequence,omitempty"`
    DictPageSizeLimit *int64 `json:"DictPageSizeLimit,omitempty"`
    EnableStatistics *bool `json:"EnableStatistics,omitempty"`
    EncodingType *EncodingTypeValueEnum `json:"EncodingType,omitempty"`
    EncryptionMode *EncryptionModeValueEnum `json:"EncryptionMode,omitempty"`
    ExternalTableDefinition *string `json:"ExternalTableDefinition,omitempty"`
    IgnoreHeaderRows *int64 `json:"IgnoreHeaderRows,omitempty"`
    IncludeOpForFullLoad *bool `json:"IncludeOpForFullLoad,omitempty"`
    MaxFileSize *int64 `json:"MaxFileSize,omitempty"`
    ParquetTimestampInMillisecond *bool `json:"ParquetTimestampInMillisecond,omitempty"`
    ParquetVersion *ParquetVersionValueEnum `json:"ParquetVersion,omitempty"`
    PreserveTransactions *bool `json:"PreserveTransactions,omitempty"`
    Rfc4180 *bool `json:"Rfc4180,omitempty"`
    RowGroupLength *int64 `json:"RowGroupLength,omitempty"`
    ServerSideEncryptionKmsKeyID *string `json:"ServerSideEncryptionKmsKeyId,omitempty"`
    ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn,omitempty"`
    TimestampColumnName *string `json:"TimestampColumnName,omitempty"`
    UseCsvNoSupValue *bool `json:"UseCsvNoSupValue,omitempty"`
    
}

