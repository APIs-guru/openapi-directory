package shared



type GetAssetPropertyAggregatesResponse struct {
    AggregatedValues []AggregatedValue `json:"aggregatedValues"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

