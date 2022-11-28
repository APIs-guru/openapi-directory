package shared

// TestRepositoryTriggersInput
// Represents the input of a test repository triggers operation.
type TestRepositoryTriggersInput struct {
	RepositoryName string              `json:"repositoryName"`
	Triggers       []RepositoryTrigger `json:"triggers"`
}
