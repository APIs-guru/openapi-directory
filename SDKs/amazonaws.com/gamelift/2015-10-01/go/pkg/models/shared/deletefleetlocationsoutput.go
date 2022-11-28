package shared

// DeleteFleetLocationsOutput
// Represents the returned data in response to a request operation.
type DeleteFleetLocationsOutput struct {
	FleetArn       *string         `json:"FleetArn,omitempty"`
	FleetID        *string         `json:"FleetId,omitempty"`
	LocationStates []LocationState `json:"LocationStates,omitempty"`
}
