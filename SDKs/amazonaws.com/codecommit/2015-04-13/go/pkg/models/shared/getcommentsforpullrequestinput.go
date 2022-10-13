package shared

type GetCommentsForPullRequestInput struct {
	AfterCommitID  *string `json:"afterCommitId"`
	BeforeCommitID *string `json:"beforeCommitId"`
	MaxResults     *int64  `json:"maxResults"`
	NextToken      *string `json:"nextToken"`
	PullRequestID  string  `json:"pullRequestId"`
	RepositoryName *string `json:"repositoryName"`
}
