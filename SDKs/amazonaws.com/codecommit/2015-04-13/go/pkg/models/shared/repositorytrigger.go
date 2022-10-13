package shared

type RepositoryTrigger struct {
	Branches       []string                         `json:"branches"`
	CustomData     *string                          `json:"customData"`
	DestinationArn string                           `json:"destinationArn"`
	Events         []RepositoryTriggerEventEnumEnum `json:"events"`
	Name           string                           `json:"name"`
}
