package shared



type CreateFleetLocationsOutput struct {
    FleetArn *string `json:"FleetArn,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    LocationStates []LocationState `json:"LocationStates,omitempty"`
    
}

