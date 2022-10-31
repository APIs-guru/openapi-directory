package shared



type DestinationDefinitionCreate struct {
    DockerImageTag string `json:"dockerImageTag"`
    DockerRepository string `json:"dockerRepository"`
    DocumentationURL string `json:"documentationUrl"`
    Icon *string `json:"icon,omitempty"`
    Name string `json:"name"`
    
}

