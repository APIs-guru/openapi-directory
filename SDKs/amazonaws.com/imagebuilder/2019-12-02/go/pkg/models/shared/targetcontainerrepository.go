package shared



type TargetContainerRepository struct {
    RepositoryName string `json:"repositoryName"`
    Service ContainerRepositoryServiceEnum `json:"service"`
    
}

