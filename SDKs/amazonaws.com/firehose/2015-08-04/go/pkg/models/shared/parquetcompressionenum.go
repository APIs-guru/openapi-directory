package shared

type ParquetCompressionEnum string

const (
	ParquetCompressionEnumUncompressed ParquetCompressionEnum = "UNCOMPRESSED"
	ParquetCompressionEnumGzip         ParquetCompressionEnum = "GZIP"
	ParquetCompressionEnumSnappy       ParquetCompressionEnum = "SNAPPY"
)
