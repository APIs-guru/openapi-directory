package shared

type GetBehaviorModelTrainingSummariesResponse struct {
	NextToken *string                        `json:"nextToken,omitempty"`
	Summaries []BehaviorModelTrainingSummary `json:"summaries,omitempty"`
}
