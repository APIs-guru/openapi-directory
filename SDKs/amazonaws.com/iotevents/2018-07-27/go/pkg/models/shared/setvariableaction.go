package shared

// SetVariableAction
// Information about the variable and its new value.
type SetVariableAction struct {
	Value        string `json:"value"`
	VariableName string `json:"variableName"`
}
