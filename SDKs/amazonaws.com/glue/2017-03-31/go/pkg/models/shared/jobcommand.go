package shared

type JobCommand struct {
	Name           *string `json:"Name"`
	PythonVersion  *string `json:"PythonVersion"`
	ScriptLocation *string `json:"ScriptLocation"`
}
