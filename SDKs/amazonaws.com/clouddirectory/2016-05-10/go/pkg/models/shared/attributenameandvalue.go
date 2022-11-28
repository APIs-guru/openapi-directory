package shared

// AttributeNameAndValue
// Identifies the attribute name and value for a typed link.
type AttributeNameAndValue struct {
	AttributeName string              `json:"AttributeName"`
	Value         TypedAttributeValue `json:"Value"`
}
