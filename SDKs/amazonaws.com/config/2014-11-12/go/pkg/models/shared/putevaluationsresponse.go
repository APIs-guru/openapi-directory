package shared

type PutEvaluationsResponse struct {
	FailedEvaluations []Evaluation `json:"FailedEvaluations"`
}
