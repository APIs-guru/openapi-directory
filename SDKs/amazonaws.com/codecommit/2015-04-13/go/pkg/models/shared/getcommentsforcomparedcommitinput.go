package shared

type GetCommentsForComparedCommitInput struct {
	AfterCommitID  string  `json:"afterCommitId"`
	BeforeCommitID *string `json:"beforeCommitId"`
	MaxResults     *int64  `json:"maxResults"`
	NextToken      *string `json:"nextToken"`
	RepositoryName string  `json:"repositoryName"`
}
