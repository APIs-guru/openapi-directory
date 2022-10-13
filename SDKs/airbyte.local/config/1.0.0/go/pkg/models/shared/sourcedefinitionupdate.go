package shared

type SourceDefinitionUpdate struct {
	DockerImageTag     string `json:"dockerImageTag"`
	SourceDefinitionID string `json:"sourceDefinitionId"`
}
