package shared



type PutInsightSelectorsRequest struct {
    InsightSelectors []InsightSelector `json:"InsightSelectors"`
    TrailName string `json:"TrailName"`
    
}

