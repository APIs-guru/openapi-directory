package shared

// SourceDefinitionUpdate
// Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
type SourceDefinitionUpdate struct {
	DockerImageTag     string `json:"dockerImageTag"`
	SourceDefinitionID string `json:"sourceDefinitionId"`
}
