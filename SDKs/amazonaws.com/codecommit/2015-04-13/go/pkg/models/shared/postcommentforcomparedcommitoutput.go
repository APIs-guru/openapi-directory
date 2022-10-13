package shared

type PostCommentForComparedCommitOutput struct {
	AfterBlobID    *string   `json:"afterBlobId"`
	AfterCommitID  *string   `json:"afterCommitId"`
	BeforeBlobID   *string   `json:"beforeBlobId"`
	BeforeCommitID *string   `json:"beforeCommitId"`
	Comment        *Comment  `json:"comment"`
	Location       *Location `json:"location"`
	RepositoryName *string   `json:"repositoryName"`
}
