package shared



type ListApplicationStatesRequest struct {
    ApplicationIds []string `json:"ApplicationIds,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

