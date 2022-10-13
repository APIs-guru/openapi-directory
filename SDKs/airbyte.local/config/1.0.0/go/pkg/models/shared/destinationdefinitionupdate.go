package shared

type DestinationDefinitionUpdate struct {
	DestinationDefinitionID string  `json:"destinationDefinitionId"`
	DockerImageTag          *string `json:"dockerImageTag"`
}
