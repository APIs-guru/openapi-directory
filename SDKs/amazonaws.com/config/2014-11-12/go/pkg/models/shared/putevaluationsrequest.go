package shared

type PutEvaluationsRequest struct {
	Evaluations []Evaluation `json:"Evaluations"`
	ResultToken string       `json:"ResultToken"`
	TestMode    *bool        `json:"TestMode"`
}
