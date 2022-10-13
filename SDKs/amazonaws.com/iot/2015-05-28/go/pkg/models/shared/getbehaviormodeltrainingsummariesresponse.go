package shared

type GetBehaviorModelTrainingSummariesResponse struct {
	NextToken *string                        `json:"nextToken"`
	Summaries []BehaviorModelTrainingSummary `json:"summaries"`
}
