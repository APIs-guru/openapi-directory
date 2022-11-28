package shared

// DeleteFleetLocationsInput
// Represents the input for a request operation.
type DeleteFleetLocationsInput struct {
	FleetID   string   `json:"FleetId"`
	Locations []string `json:"Locations"`
}
