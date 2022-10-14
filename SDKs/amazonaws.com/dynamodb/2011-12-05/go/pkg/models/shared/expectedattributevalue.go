package shared

type ExpectedAttributeValue struct {
	Exists *bool           `json:"Exists,omitempty"`
	Value  *AttributeValue `json:"Value,omitempty"`
}
