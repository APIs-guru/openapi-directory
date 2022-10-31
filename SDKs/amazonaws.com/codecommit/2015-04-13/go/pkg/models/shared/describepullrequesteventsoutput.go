package shared



type DescribePullRequestEventsOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    PullRequestEvents []PullRequestEvent `json:"pullRequestEvents"`
    
}

