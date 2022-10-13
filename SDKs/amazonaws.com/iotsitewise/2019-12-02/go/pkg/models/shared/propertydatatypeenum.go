package shared

type PropertyDataTypeEnum string

const (
	PropertyDataTypeEnumString  PropertyDataTypeEnum = "STRING"
	PropertyDataTypeEnumInteger PropertyDataTypeEnum = "INTEGER"
	PropertyDataTypeEnumDouble  PropertyDataTypeEnum = "DOUBLE"
	PropertyDataTypeEnumBoolean PropertyDataTypeEnum = "BOOLEAN"
	PropertyDataTypeEnumStruct  PropertyDataTypeEnum = "STRUCT"
)
