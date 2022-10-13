package shared

type FormatTypeEnum string

const (
	FormatTypeEnumCsv     FormatTypeEnum = "CSV"
	FormatTypeEnumJSON    FormatTypeEnum = "JSON"
	FormatTypeEnumParquet FormatTypeEnum = "PARQUET"
	FormatTypeEnumXML     FormatTypeEnum = "XML"
)
