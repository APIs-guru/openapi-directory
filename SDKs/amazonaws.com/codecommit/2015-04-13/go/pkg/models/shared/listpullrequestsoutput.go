package shared

type ListPullRequestsOutput struct {
	NextToken      *string  `json:"nextToken"`
	PullRequestIds []string `json:"pullRequestIds"`
}
