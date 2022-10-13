package shared

type CompressionFormatEnum string

const (
	CompressionFormatEnumZip     CompressionFormatEnum = "ZIP"
	CompressionFormatEnumGzip    CompressionFormatEnum = "GZIP"
	CompressionFormatEnumParquet CompressionFormatEnum = "Parquet"
)
