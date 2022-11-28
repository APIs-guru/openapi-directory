package shared

// GetInstanceAccessInput
// Represents the input for a request operation.
type GetInstanceAccessInput struct {
	FleetID    string `json:"FleetId"`
	InstanceID string `json:"InstanceId"`
}
