package shared

// CreateFleetLocationsInput
// Represents the input for a request operation.
type CreateFleetLocationsInput struct {
	FleetID   string                  `json:"FleetId"`
	Locations []LocationConfiguration `json:"Locations"`
}
