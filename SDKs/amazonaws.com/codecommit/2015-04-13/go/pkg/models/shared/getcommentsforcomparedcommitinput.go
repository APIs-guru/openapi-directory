package shared

type GetCommentsForComparedCommitInput struct {
	AfterCommitID  string  `json:"afterCommitId"`
	BeforeCommitID *string `json:"beforeCommitId,omitempty"`
	MaxResults     *int64  `json:"maxResults,omitempty"`
	NextToken      *string `json:"nextToken,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
