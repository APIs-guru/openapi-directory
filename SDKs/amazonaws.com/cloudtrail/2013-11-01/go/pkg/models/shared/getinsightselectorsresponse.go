package shared

type GetInsightSelectorsResponse struct {
	InsightSelectors []InsightSelector `json:"InsightSelectors"`
	TrailArn         *string           `json:"TrailARN"`
}
