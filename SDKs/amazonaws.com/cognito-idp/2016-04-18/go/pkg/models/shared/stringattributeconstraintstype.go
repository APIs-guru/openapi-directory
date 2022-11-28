package shared

// StringAttributeConstraintsType
// The constraints associated with a string attribute.
type StringAttributeConstraintsType struct {
	MaxLength *string `json:"MaxLength,omitempty"`
	MinLength *string `json:"MinLength,omitempty"`
}
