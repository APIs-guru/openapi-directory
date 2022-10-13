package shared

type SchemaAttributeType struct {
	AttributeDataType          *AttributeDataTypeEnum          `json:"AttributeDataType"`
	DeveloperOnlyAttribute     *bool                           `json:"DeveloperOnlyAttribute"`
	Mutable                    *bool                           `json:"Mutable"`
	Name                       *string                         `json:"Name"`
	NumberAttributeConstraints *NumberAttributeConstraintsType `json:"NumberAttributeConstraints"`
	Required                   *bool                           `json:"Required"`
	StringAttributeConstraints *StringAttributeConstraintsType `json:"StringAttributeConstraints"`
}
