package shared

// CreateFleetOutput
// Represents the returned data in response to a request operation.
type CreateFleetOutput struct {
	FleetAttributes *FleetAttributes `json:"FleetAttributes,omitempty"`
	LocationStates  []LocationState  `json:"LocationStates,omitempty"`
}
