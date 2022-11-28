package shared

// ConnectionInput
// A structure that is used to specify a connection to create or update.
type ConnectionInput struct {
	ConnectionProperties           map[string]string               `json:"ConnectionProperties"`
	ConnectionType                 ConnectionTypeEnum              `json:"ConnectionType"`
	Description                    *string                         `json:"Description,omitempty"`
	MatchCriteria                  []string                        `json:"MatchCriteria,omitempty"`
	Name                           string                          `json:"Name"`
	PhysicalConnectionRequirements *PhysicalConnectionRequirements `json:"PhysicalConnectionRequirements,omitempty"`
}
