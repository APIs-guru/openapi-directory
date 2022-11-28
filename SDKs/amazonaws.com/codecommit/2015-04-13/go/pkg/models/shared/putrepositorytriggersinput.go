package shared

// PutRepositoryTriggersInput
// Represents the input of a put repository triggers operation.
type PutRepositoryTriggersInput struct {
	RepositoryName string              `json:"repositoryName"`
	Triggers       []RepositoryTrigger `json:"triggers"`
}
