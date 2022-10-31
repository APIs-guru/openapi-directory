package shared

type UpdateFleetCapacityOutput struct {
	FleetArn *string `json:"FleetArn,omitempty"`
	FleetID  *string `json:"FleetId,omitempty"`
	Location *string `json:"Location,omitempty"`
}
