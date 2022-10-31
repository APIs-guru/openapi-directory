package shared



type GetDifferencesInput struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    AfterCommitSpecifier string `json:"afterCommitSpecifier"`
    AfterPath *string `json:"afterPath,omitempty"`
    BeforeCommitSpecifier *string `json:"beforeCommitSpecifier,omitempty"`
    BeforePath *string `json:"beforePath,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

