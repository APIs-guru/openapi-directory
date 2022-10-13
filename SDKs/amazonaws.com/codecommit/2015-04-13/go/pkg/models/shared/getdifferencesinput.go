package shared

type GetDifferencesInput struct {
	MaxResults            *int64  `json:"MaxResults"`
	NextToken             *string `json:"NextToken"`
	AfterCommitSpecifier  string  `json:"afterCommitSpecifier"`
	AfterPath             *string `json:"afterPath"`
	BeforeCommitSpecifier *string `json:"beforeCommitSpecifier"`
	BeforePath            *string `json:"beforePath"`
	RepositoryName        string  `json:"repositoryName"`
}
