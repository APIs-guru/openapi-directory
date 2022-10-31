package shared



type ListImageRecipesResponse struct {
    ImageRecipeSummaryList []ImageRecipeSummary `json:"imageRecipeSummaryList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

