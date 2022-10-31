package shared

type FacetAttributeTypeEnum string

const (
	FacetAttributeTypeEnumString   FacetAttributeTypeEnum = "STRING"
	FacetAttributeTypeEnumBinary   FacetAttributeTypeEnum = "BINARY"
	FacetAttributeTypeEnumBoolean  FacetAttributeTypeEnum = "BOOLEAN"
	FacetAttributeTypeEnumNumber   FacetAttributeTypeEnum = "NUMBER"
	FacetAttributeTypeEnumDatetime FacetAttributeTypeEnum = "DATETIME"
	FacetAttributeTypeEnumVariant  FacetAttributeTypeEnum = "VARIANT"
)
