package shared

type SourceDefinitionRead struct {
	DockerImageTag     string  `json:"dockerImageTag"`
	DockerRepository   string  `json:"dockerRepository"`
	DocumentationURL   *string `json:"documentationUrl,omitempty"`
	Icon               *string `json:"icon,omitempty"`
	Name               string  `json:"name"`
	SourceDefinitionID string  `json:"sourceDefinitionId"`
}
