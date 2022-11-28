package shared

// ExpressionVariable
// Contains expression variable information.
type ExpressionVariable struct {
	Name  string        `json:"name"`
	Value VariableValue `json:"value"`
}
