package shared

type CreateScriptResponse struct {
	PythonScript *string `json:"PythonScript"`
	ScalaCode    *string `json:"ScalaCode"`
}
