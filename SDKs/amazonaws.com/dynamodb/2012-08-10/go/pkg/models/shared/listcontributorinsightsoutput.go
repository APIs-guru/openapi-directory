package shared



type ListContributorInsightsOutput struct {
    ContributorInsightsSummaries []ContributorInsightsSummary `json:"ContributorInsightsSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

