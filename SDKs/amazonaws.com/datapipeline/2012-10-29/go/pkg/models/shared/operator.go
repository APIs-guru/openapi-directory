package shared

// Operator
// Contains a logical operation for comparing the value of a field with a specified value.
type Operator struct {
	Type   *OperatorTypeEnum `json:"type,omitempty"`
	Values []string          `json:"values,omitempty"`
}
