package shared

type PutInsightSelectorsResponse struct {
	InsightSelectors []InsightSelector `json:"InsightSelectors"`
	TrailArn         *string           `json:"TrailARN"`
}
