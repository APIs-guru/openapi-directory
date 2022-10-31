package shared



type GetBranchInput struct {
    BranchName *string `json:"branchName,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

