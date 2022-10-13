package shared

type UpdateFleetAttributesInput struct {
	Description                    *string                      `json:"Description"`
	FleetID                        string                       `json:"FleetId"`
	MetricGroups                   []string                     `json:"MetricGroups"`
	Name                           *string                      `json:"Name"`
	NewGameSessionProtectionPolicy *ProtectionPolicyEnum        `json:"NewGameSessionProtectionPolicy"`
	ResourceCreationLimitPolicy    *ResourceCreationLimitPolicy `json:"ResourceCreationLimitPolicy"`
}
