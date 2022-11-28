package shared

// ObjectAttributeRange
// A range of attributes.
type ObjectAttributeRange struct {
	AttributeKey *AttributeKey             `json:"AttributeKey,omitempty"`
	Range        *TypedAttributeValueRange `json:"Range,omitempty"`
}
