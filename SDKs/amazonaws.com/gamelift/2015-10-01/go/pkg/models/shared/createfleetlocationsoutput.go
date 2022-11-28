package shared

// CreateFleetLocationsOutput
// Represents the returned data in response to a request operation.
type CreateFleetLocationsOutput struct {
	FleetArn       *string         `json:"FleetArn,omitempty"`
	FleetID        *string         `json:"FleetId,omitempty"`
	LocationStates []LocationState `json:"LocationStates,omitempty"`
}
