package shared

type DescribePullRequestEventsInput struct {
	ActorArn             *string                   `json:"actorArn"`
	MaxResults           *int64                    `json:"maxResults"`
	NextToken            *string                   `json:"nextToken"`
	PullRequestEventType *PullRequestEventTypeEnum `json:"pullRequestEventType"`
	PullRequestID        string                    `json:"pullRequestId"`
}
