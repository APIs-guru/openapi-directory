package shared

// ParquetSerDe
// A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.
type ParquetSerDe struct {
	BlockSizeBytes              *int64                    `json:"BlockSizeBytes,omitempty"`
	Compression                 *ParquetCompressionEnum   `json:"Compression,omitempty"`
	EnableDictionaryCompression *bool                     `json:"EnableDictionaryCompression,omitempty"`
	MaxPaddingBytes             *int64                    `json:"MaxPaddingBytes,omitempty"`
	PageSizeBytes               *int64                    `json:"PageSizeBytes,omitempty"`
	WriterVersion               *ParquetWriterVersionEnum `json:"WriterVersion,omitempty"`
}
