package shared



type GetPlanResponse struct {
    PythonScript *string `json:"PythonScript,omitempty"`
    ScalaCode *string `json:"ScalaCode,omitempty"`
    
}

