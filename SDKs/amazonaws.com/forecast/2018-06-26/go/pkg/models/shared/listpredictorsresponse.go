package shared

type ListPredictorsResponse struct {
	NextToken  *string            `json:"NextToken,omitempty"`
	Predictors []PredictorSummary `json:"Predictors,omitempty"`
}
