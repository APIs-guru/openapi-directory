package shared

type ConnectionInput struct {
	ConnectionProperties           map[string]string               `json:"ConnectionProperties"`
	ConnectionType                 ConnectionTypeEnum              `json:"ConnectionType"`
	Description                    *string                         `json:"Description"`
	MatchCriteria                  []string                        `json:"MatchCriteria"`
	Name                           string                          `json:"Name"`
	PhysicalConnectionRequirements *PhysicalConnectionRequirements `json:"PhysicalConnectionRequirements"`
}
