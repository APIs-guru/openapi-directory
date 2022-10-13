package shared

type DescribePullRequestEventsOutput struct {
	NextToken         *string            `json:"nextToken"`
	PullRequestEvents []PullRequestEvent `json:"pullRequestEvents"`
}
