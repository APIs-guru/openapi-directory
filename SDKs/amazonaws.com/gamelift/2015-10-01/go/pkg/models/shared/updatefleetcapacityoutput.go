package shared

// UpdateFleetCapacityOutput
// Represents the returned data in response to a request operation.
type UpdateFleetCapacityOutput struct {
	FleetArn *string `json:"FleetArn,omitempty"`
	FleetID  *string `json:"FleetId,omitempty"`
	Location *string `json:"Location,omitempty"`
}
