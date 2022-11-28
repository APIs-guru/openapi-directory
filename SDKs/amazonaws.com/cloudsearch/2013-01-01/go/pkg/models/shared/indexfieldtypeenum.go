package shared

type IndexFieldTypeEnum string

const (
	IndexFieldTypeEnumInt          IndexFieldTypeEnum = "int"
	IndexFieldTypeEnumDouble       IndexFieldTypeEnum = "double"
	IndexFieldTypeEnumLiteral      IndexFieldTypeEnum = "literal"
	IndexFieldTypeEnumText         IndexFieldTypeEnum = "text"
	IndexFieldTypeEnumDate         IndexFieldTypeEnum = "date"
	IndexFieldTypeEnumLatlon       IndexFieldTypeEnum = "latlon"
	IndexFieldTypeEnumIntArray     IndexFieldTypeEnum = "int-array"
	IndexFieldTypeEnumDoubleArray  IndexFieldTypeEnum = "double-array"
	IndexFieldTypeEnumLiteralArray IndexFieldTypeEnum = "literal-array"
	IndexFieldTypeEnumTextArray    IndexFieldTypeEnum = "text-array"
	IndexFieldTypeEnumDateArray    IndexFieldTypeEnum = "date-array"
)
