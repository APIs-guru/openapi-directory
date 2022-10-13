package shared

type CreateFleetLocationsOutput struct {
	FleetArn       *string         `json:"FleetArn"`
	FleetID        *string         `json:"FleetId"`
	LocationStates []LocationState `json:"LocationStates"`
}
