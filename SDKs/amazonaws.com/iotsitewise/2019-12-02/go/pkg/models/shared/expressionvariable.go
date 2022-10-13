package shared

type ExpressionVariable struct {
	Name  string        `json:"name"`
	Value VariableValue `json:"value"`
}
