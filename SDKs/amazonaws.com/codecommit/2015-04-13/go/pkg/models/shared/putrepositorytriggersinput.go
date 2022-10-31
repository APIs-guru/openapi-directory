package shared

type PutRepositoryTriggersInput struct {
	RepositoryName string              `json:"repositoryName"`
	Triggers       []RepositoryTrigger `json:"triggers"`
}
