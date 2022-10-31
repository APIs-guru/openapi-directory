package shared



type ListComponentBuildVersionsResponse struct {
    ComponentSummaryList []ComponentSummary `json:"componentSummaryList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

