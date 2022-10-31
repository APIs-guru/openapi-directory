package shared



type ListContainerRecipesResponse struct {
    ContainerRecipeSummaryList []ContainerRecipeSummary `json:"containerRecipeSummaryList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

