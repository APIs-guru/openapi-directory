package shared

type GetPlanResponse struct {
	PythonScript *string `json:"PythonScript"`
	ScalaCode    *string `json:"ScalaCode"`
}
