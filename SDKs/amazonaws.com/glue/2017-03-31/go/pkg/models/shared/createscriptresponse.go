package shared

type CreateScriptResponse struct {
	PythonScript *string `json:"PythonScript,omitempty"`
	ScalaCode    *string `json:"ScalaCode,omitempty"`
}
