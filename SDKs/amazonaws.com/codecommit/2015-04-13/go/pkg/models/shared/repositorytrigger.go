package shared

// RepositoryTrigger
// Information about a trigger for a repository.
type RepositoryTrigger struct {
	Branches       []string                         `json:"branches,omitempty"`
	CustomData     *string                          `json:"customData,omitempty"`
	DestinationArn string                           `json:"destinationArn"`
	Events         []RepositoryTriggerEventEnumEnum `json:"events"`
	Name           string                           `json:"name"`
}
