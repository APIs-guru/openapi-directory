package shared

type SetVariableAction struct {
	Value        string `json:"value"`
	VariableName string `json:"variableName"`
}
