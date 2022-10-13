package shared

type S3Settings struct {
	AddColumnName                 *bool                            `json:"AddColumnName"`
	BucketFolder                  *string                          `json:"BucketFolder"`
	BucketName                    *string                          `json:"BucketName"`
	CannedACLForObjects           *CannedACLForObjectsValueEnum    `json:"CannedAclForObjects"`
	CdcInsertsAndUpdates          *bool                            `json:"CdcInsertsAndUpdates"`
	CdcInsertsOnly                *bool                            `json:"CdcInsertsOnly"`
	CdcMaxBatchInterval           *int64                           `json:"CdcMaxBatchInterval"`
	CdcMinFileSize                *int64                           `json:"CdcMinFileSize"`
	CdcPath                       *string                          `json:"CdcPath"`
	CompressionType               *CompressionTypeValueEnum        `json:"CompressionType"`
	CsvDelimiter                  *string                          `json:"CsvDelimiter"`
	CsvNoSupValue                 *string                          `json:"CsvNoSupValue"`
	CsvNullValue                  *string                          `json:"CsvNullValue"`
	CsvRowDelimiter               *string                          `json:"CsvRowDelimiter"`
	DataFormat                    *DataFormatValueEnum             `json:"DataFormat"`
	DataPageSize                  *int64                           `json:"DataPageSize"`
	DatePartitionDelimiter        *DatePartitionDelimiterValueEnum `json:"DatePartitionDelimiter"`
	DatePartitionEnabled          *bool                            `json:"DatePartitionEnabled"`
	DatePartitionSequence         *DatePartitionSequenceValueEnum  `json:"DatePartitionSequence"`
	DictPageSizeLimit             *int64                           `json:"DictPageSizeLimit"`
	EnableStatistics              *bool                            `json:"EnableStatistics"`
	EncodingType                  *EncodingTypeValueEnum           `json:"EncodingType"`
	EncryptionMode                *EncryptionModeValueEnum         `json:"EncryptionMode"`
	ExternalTableDefinition       *string                          `json:"ExternalTableDefinition"`
	IgnoreHeaderRows              *int64                           `json:"IgnoreHeaderRows"`
	IncludeOpForFullLoad          *bool                            `json:"IncludeOpForFullLoad"`
	MaxFileSize                   *int64                           `json:"MaxFileSize"`
	ParquetTimestampInMillisecond *bool                            `json:"ParquetTimestampInMillisecond"`
	ParquetVersion                *ParquetVersionValueEnum         `json:"ParquetVersion"`
	PreserveTransactions          *bool                            `json:"PreserveTransactions"`
	Rfc4180                       *bool                            `json:"Rfc4180"`
	RowGroupLength                *int64                           `json:"RowGroupLength"`
	ServerSideEncryptionKmsKeyID  *string                          `json:"ServerSideEncryptionKmsKeyId"`
	ServiceAccessRoleArn          *string                          `json:"ServiceAccessRoleArn"`
	TimestampColumnName           *string                          `json:"TimestampColumnName"`
	UseCsvNoSupValue              *bool                            `json:"UseCsvNoSupValue"`
}
