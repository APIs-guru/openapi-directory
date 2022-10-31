package shared



type PutInsightSelectorsResponse struct {
    InsightSelectors []InsightSelector `json:"InsightSelectors,omitempty"`
    TrailArn *string `json:"TrailARN,omitempty"`
    
}

