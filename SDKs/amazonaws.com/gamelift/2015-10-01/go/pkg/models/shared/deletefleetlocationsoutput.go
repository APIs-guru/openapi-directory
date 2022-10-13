package shared

type DeleteFleetLocationsOutput struct {
	FleetArn       *string         `json:"FleetArn"`
	FleetID        *string         `json:"FleetId"`
	LocationStates []LocationState `json:"LocationStates"`
}
