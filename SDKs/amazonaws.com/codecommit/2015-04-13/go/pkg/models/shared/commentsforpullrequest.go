package shared

type CommentsForPullRequest struct {
	AfterBlobID    *string   `json:"afterBlobId"`
	AfterCommitID  *string   `json:"afterCommitId"`
	BeforeBlobID   *string   `json:"beforeBlobId"`
	BeforeCommitID *string   `json:"beforeCommitId"`
	Comments       []Comment `json:"comments"`
	Location       *Location `json:"location"`
	PullRequestID  *string   `json:"pullRequestId"`
	RepositoryName *string   `json:"repositoryName"`
}
