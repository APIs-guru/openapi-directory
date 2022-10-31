package shared

type SchemaAttributeType struct {
	AttributeDataType          *AttributeDataTypeEnum          `json:"AttributeDataType,omitempty"`
	DeveloperOnlyAttribute     *bool                           `json:"DeveloperOnlyAttribute,omitempty"`
	Mutable                    *bool                           `json:"Mutable,omitempty"`
	Name                       *string                         `json:"Name,omitempty"`
	NumberAttributeConstraints *NumberAttributeConstraintsType `json:"NumberAttributeConstraints,omitempty"`
	Required                   *bool                           `json:"Required,omitempty"`
	StringAttributeConstraints *StringAttributeConstraintsType `json:"StringAttributeConstraints,omitempty"`
}
