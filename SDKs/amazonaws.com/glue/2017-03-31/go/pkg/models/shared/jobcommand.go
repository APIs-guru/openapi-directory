package shared

// JobCommand
// Specifies code that runs when a job is run.
type JobCommand struct {
	Name           *string `json:"Name,omitempty"`
	PythonVersion  *string `json:"PythonVersion,omitempty"`
	ScriptLocation *string `json:"ScriptLocation,omitempty"`
}
