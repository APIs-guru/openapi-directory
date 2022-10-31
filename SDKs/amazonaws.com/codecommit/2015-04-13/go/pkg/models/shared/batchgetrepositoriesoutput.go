package shared



type BatchGetRepositoriesOutput struct {
    Repositories []RepositoryMetadata `json:"repositories,omitempty"`
    RepositoriesNotFound []string `json:"repositoriesNotFound,omitempty"`
    
}

