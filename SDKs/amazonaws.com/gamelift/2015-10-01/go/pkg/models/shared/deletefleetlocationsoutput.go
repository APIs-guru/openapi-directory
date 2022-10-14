package shared

type DeleteFleetLocationsOutput struct {
	FleetArn       *string         `json:"FleetArn,omitempty"`
	FleetID        *string         `json:"FleetId,omitempty"`
	LocationStates []LocationState `json:"LocationStates,omitempty"`
}
