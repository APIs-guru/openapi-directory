package shared



type ListApplicationsResponse struct {
    ApplicationSummaries []ApplicationSummary `json:"applicationSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

