package shared

// CommentsForPullRequest
// Returns information about comments on a pull request.
type CommentsForPullRequest struct {
	AfterBlobID    *string   `json:"afterBlobId,omitempty"`
	AfterCommitID  *string   `json:"afterCommitId,omitempty"`
	BeforeBlobID   *string   `json:"beforeBlobId,omitempty"`
	BeforeCommitID *string   `json:"beforeCommitId,omitempty"`
	Comments       []Comment `json:"comments,omitempty"`
	Location       *Location `json:"location,omitempty"`
	PullRequestID  *string   `json:"pullRequestId,omitempty"`
	RepositoryName *string   `json:"repositoryName,omitempty"`
}
