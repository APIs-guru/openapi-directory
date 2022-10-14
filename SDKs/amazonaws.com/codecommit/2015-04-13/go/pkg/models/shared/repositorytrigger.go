package shared

type RepositoryTrigger struct {
	Branches       []string                         `json:"branches,omitempty"`
	CustomData     *string                          `json:"customData,omitempty"`
	DestinationArn string                           `json:"destinationArn"`
	Events         []RepositoryTriggerEventEnumEnum `json:"events"`
	Name           string                           `json:"name"`
}
