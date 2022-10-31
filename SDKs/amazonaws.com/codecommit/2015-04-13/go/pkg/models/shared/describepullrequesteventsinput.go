package shared



type DescribePullRequestEventsInput struct {
    ActorArn *string `json:"actorArn,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PullRequestEventType *PullRequestEventTypeEnum `json:"pullRequestEventType,omitempty"`
    PullRequestID string `json:"pullRequestId"`
    
}

