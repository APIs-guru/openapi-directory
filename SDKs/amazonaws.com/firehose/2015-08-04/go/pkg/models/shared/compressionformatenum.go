package shared




type CompressionFormatEnum string

const (
    CompressionFormatEnumUncompressed CompressionFormatEnum = "UNCOMPRESSED"
CompressionFormatEnumGzip CompressionFormatEnum = "GZIP"
CompressionFormatEnumZip CompressionFormatEnum = "ZIP"
CompressionFormatEnumSnappy CompressionFormatEnum = "Snappy"
CompressionFormatEnumHadoopSnappy CompressionFormatEnum = "HADOOP_SNAPPY"
)


