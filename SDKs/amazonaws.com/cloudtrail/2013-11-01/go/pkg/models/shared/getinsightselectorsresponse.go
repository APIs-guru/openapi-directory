package shared

type GetInsightSelectorsResponse struct {
	InsightSelectors []InsightSelector `json:"InsightSelectors,omitempty"`
	TrailArn         *string           `json:"TrailARN,omitempty"`
}
