package shared

// StartFleetActionsInput
// Represents the input for a request operation.
type StartFleetActionsInput struct {
	Actions  []FleetActionEnum `json:"Actions"`
	FleetID  string            `json:"FleetId"`
	Location *string           `json:"Location,omitempty"`
}
