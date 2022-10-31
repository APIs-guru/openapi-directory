package shared



type DeleteFleetLocationsInput struct {
    FleetID string `json:"FleetId"`
    Locations []string `json:"Locations"`
    
}

