package shared

type SourceDefinitionRead struct {
	DockerImageTag     string  `json:"dockerImageTag"`
	DockerRepository   string  `json:"dockerRepository"`
	DocumentationURL   *string `json:"documentationUrl"`
	Icon               *string `json:"icon"`
	Name               string  `json:"name"`
	SourceDefinitionID string  `json:"sourceDefinitionId"`
}
