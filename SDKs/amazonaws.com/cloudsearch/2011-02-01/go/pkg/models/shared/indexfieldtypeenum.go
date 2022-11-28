package shared

type IndexFieldTypeEnum string

const (
	IndexFieldTypeEnumUint    IndexFieldTypeEnum = "uint"
	IndexFieldTypeEnumLiteral IndexFieldTypeEnum = "literal"
	IndexFieldTypeEnumText    IndexFieldTypeEnum = "text"
)
