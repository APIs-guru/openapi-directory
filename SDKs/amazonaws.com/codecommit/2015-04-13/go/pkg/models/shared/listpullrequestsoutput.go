package shared

type ListPullRequestsOutput struct {
	NextToken      *string  `json:"nextToken,omitempty"`
	PullRequestIds []string `json:"pullRequestIds"`
}
