package shared

type PostCommentForComparedCommitInput struct {
	AfterCommitID      string    `json:"afterCommitId"`
	BeforeCommitID     *string   `json:"beforeCommitId,omitempty"`
	ClientRequestToken *string   `json:"clientRequestToken,omitempty"`
	Content            string    `json:"content"`
	Location           *Location `json:"location,omitempty"`
	RepositoryName     string    `json:"repositoryName"`
}
