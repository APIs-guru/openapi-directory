package shared

// NumberAttributeConstraintsType
// The minimum and maximum value of an attribute that is of the number data type.
type NumberAttributeConstraintsType struct {
	MaxValue *string `json:"MaxValue,omitempty"`
	MinValue *string `json:"MinValue,omitempty"`
}
