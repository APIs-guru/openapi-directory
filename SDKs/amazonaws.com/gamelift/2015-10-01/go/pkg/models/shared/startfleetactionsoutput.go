package shared

// StartFleetActionsOutput
// Represents the returned data in response to a request operation.
type StartFleetActionsOutput struct {
	FleetArn *string `json:"FleetArn,omitempty"`
	FleetID  *string `json:"FleetId,omitempty"`
}
