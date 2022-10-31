package shared

type PutEvaluationsRequest struct {
	Evaluations []Evaluation `json:"Evaluations,omitempty"`
	ResultToken string       `json:"ResultToken"`
	TestMode    *bool        `json:"TestMode,omitempty"`
}
