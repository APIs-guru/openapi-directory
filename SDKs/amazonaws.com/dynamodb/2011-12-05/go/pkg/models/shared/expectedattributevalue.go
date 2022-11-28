package shared

// ExpectedAttributeValue
// Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it.
type ExpectedAttributeValue struct {
	Exists *bool           `json:"Exists,omitempty"`
	Value  *AttributeValue `json:"Value,omitempty"`
}
