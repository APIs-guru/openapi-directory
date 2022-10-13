package shared

type ExpectedAttributeValue struct {
	Exists *bool           `json:"Exists"`
	Value  *AttributeValue `json:"Value"`
}
