package shared

type GetCommentsForPullRequestInput struct {
	AfterCommitID  *string `json:"afterCommitId,omitempty"`
	BeforeCommitID *string `json:"beforeCommitId,omitempty"`
	MaxResults     *int64  `json:"maxResults,omitempty"`
	NextToken      *string `json:"nextToken,omitempty"`
	PullRequestID  string  `json:"pullRequestId"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
