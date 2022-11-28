package shared

// UpdateFleetAttributesInput
// Represents the input for a request operation.
type UpdateFleetAttributesInput struct {
	Description                    *string                      `json:"Description,omitempty"`
	FleetID                        string                       `json:"FleetId"`
	MetricGroups                   []string                     `json:"MetricGroups,omitempty"`
	Name                           *string                      `json:"Name,omitempty"`
	NewGameSessionProtectionPolicy *ProtectionPolicyEnum        `json:"NewGameSessionProtectionPolicy,omitempty"`
	ResourceCreationLimitPolicy    *ResourceCreationLimitPolicy `json:"ResourceCreationLimitPolicy,omitempty"`
}
