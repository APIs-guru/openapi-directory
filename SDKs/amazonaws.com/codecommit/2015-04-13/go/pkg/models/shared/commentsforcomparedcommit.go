package shared

type CommentsForComparedCommit struct {
	AfterBlobID    *string   `json:"afterBlobId"`
	AfterCommitID  *string   `json:"afterCommitId"`
	BeforeBlobID   *string   `json:"beforeBlobId"`
	BeforeCommitID *string   `json:"beforeCommitId"`
	Comments       []Comment `json:"comments"`
	Location       *Location `json:"location"`
	RepositoryName *string   `json:"repositoryName"`
}
