package shared



type CreateFleetLocationsInput struct {
    FleetID string `json:"FleetId"`
    Locations []LocationConfiguration `json:"Locations"`
    
}

