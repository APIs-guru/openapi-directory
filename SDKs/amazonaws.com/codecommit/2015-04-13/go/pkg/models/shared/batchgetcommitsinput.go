package shared



type BatchGetCommitsInput struct {
    CommitIds []string `json:"commitIds"`
    RepositoryName string `json:"repositoryName"`
    
}

