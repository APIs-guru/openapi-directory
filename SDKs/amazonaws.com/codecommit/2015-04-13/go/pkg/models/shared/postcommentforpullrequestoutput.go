package shared

type PostCommentForPullRequestOutput struct {
	AfterBlobID    *string   `json:"afterBlobId"`
	AfterCommitID  *string   `json:"afterCommitId"`
	BeforeBlobID   *string   `json:"beforeBlobId"`
	BeforeCommitID *string   `json:"beforeCommitId"`
	Comment        *Comment  `json:"comment"`
	Location       *Location `json:"location"`
	PullRequestID  *string   `json:"pullRequestId"`
	RepositoryName *string   `json:"repositoryName"`
}
