package shared

type OrcCompressionEnum string

const (
	OrcCompressionEnumNone   OrcCompressionEnum = "NONE"
	OrcCompressionEnumZlib   OrcCompressionEnum = "ZLIB"
	OrcCompressionEnumSnappy OrcCompressionEnum = "SNAPPY"
)
