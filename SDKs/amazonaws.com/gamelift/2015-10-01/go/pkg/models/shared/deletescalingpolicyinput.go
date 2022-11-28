package shared

// DeleteScalingPolicyInput
// Represents the input for a request operation.
type DeleteScalingPolicyInput struct {
	FleetID string `json:"FleetId"`
	Name    string `json:"Name"`
}
