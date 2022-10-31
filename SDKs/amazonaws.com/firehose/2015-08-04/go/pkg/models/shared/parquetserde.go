package shared



type ParquetSerDe struct {
    BlockSizeBytes *int64 `json:"BlockSizeBytes,omitempty"`
    Compression *ParquetCompressionEnum `json:"Compression,omitempty"`
    EnableDictionaryCompression *bool `json:"EnableDictionaryCompression,omitempty"`
    MaxPaddingBytes *int64 `json:"MaxPaddingBytes,omitempty"`
    PageSizeBytes *int64 `json:"PageSizeBytes,omitempty"`
    WriterVersion *ParquetWriterVersionEnum `json:"WriterVersion,omitempty"`
    
}

