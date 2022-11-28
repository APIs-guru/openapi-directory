package shared

// TargetContainerRepository
// The container repository where the output container image is stored.
type TargetContainerRepository struct {
	RepositoryName string                         `json:"repositoryName"`
	Service        ContainerRepositoryServiceEnum `json:"service"`
}
