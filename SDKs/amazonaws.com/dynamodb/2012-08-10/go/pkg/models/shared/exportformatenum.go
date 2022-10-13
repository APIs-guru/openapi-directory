package shared

type ExportFormatEnum string

const (
	ExportFormatEnumDynamodbJSON ExportFormatEnum = "DYNAMODB_JSON"
	ExportFormatEnumIon          ExportFormatEnum = "ION"
)
