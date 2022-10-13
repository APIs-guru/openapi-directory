package shared

type ParquetSerDe struct {
	BlockSizeBytes              *int64                    `json:"BlockSizeBytes"`
	Compression                 *ParquetCompressionEnum   `json:"Compression"`
	EnableDictionaryCompression *bool                     `json:"EnableDictionaryCompression"`
	MaxPaddingBytes             *int64                    `json:"MaxPaddingBytes"`
	PageSizeBytes               *int64                    `json:"PageSizeBytes"`
	WriterVersion               *ParquetWriterVersionEnum `json:"WriterVersion"`
}
