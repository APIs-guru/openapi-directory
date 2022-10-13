package shared

type PostCommentForComparedCommitInput struct {
	AfterCommitID      string    `json:"afterCommitId"`
	BeforeCommitID     *string   `json:"beforeCommitId"`
	ClientRequestToken *string   `json:"clientRequestToken"`
	Content            string    `json:"content"`
	Location           *Location `json:"location"`
	RepositoryName     string    `json:"repositoryName"`
}
