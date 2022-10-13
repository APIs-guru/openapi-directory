package shared

type ListPredictorsResponse struct {
	NextToken  *string            `json:"NextToken"`
	Predictors []PredictorSummary `json:"Predictors"`
}
