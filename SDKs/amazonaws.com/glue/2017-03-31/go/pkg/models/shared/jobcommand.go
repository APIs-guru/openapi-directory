package shared

type JobCommand struct {
	Name           *string `json:"Name,omitempty"`
	PythonVersion  *string `json:"PythonVersion,omitempty"`
	ScriptLocation *string `json:"ScriptLocation,omitempty"`
}
