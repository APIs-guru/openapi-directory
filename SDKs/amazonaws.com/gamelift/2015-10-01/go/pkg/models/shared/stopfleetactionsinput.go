package shared

// StopFleetActionsInput
// Represents the input for a request operation.
type StopFleetActionsInput struct {
	Actions  []FleetActionEnum `json:"Actions"`
	FleetID  string            `json:"FleetId"`
	Location *string           `json:"Location,omitempty"`
}
