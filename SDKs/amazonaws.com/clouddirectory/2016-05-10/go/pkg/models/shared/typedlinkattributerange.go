package shared

// TypedLinkAttributeRange
// Identifies the range of attributes that are used by a specified filter.
type TypedLinkAttributeRange struct {
	AttributeName *string                  `json:"AttributeName,omitempty"`
	Range         TypedAttributeValueRange `json:"Range"`
}
