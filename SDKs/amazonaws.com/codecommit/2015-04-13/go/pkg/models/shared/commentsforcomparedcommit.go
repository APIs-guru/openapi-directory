package shared

// CommentsForComparedCommit
// Returns information about comments on the comparison between two commits.
type CommentsForComparedCommit struct {
	AfterBlobID    *string   `json:"afterBlobId,omitempty"`
	AfterCommitID  *string   `json:"afterCommitId,omitempty"`
	BeforeBlobID   *string   `json:"beforeBlobId,omitempty"`
	BeforeCommitID *string   `json:"beforeCommitId,omitempty"`
	Comments       []Comment `json:"comments,omitempty"`
	Location       *Location `json:"location,omitempty"`
	RepositoryName *string   `json:"repositoryName,omitempty"`
}
