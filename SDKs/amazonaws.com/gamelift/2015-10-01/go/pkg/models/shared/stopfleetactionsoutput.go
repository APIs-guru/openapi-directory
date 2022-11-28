package shared

// StopFleetActionsOutput
// Represents the input for a request operation.
type StopFleetActionsOutput struct {
	FleetArn *string `json:"FleetArn,omitempty"`
	FleetID  *string `json:"FleetId,omitempty"`
}
