package shared



type TestRepositoryTriggersInput struct {
    RepositoryName string `json:"repositoryName"`
    Triggers []RepositoryTrigger `json:"triggers"`
    
}

