package shared

type CreateFleetOutput struct {
	FleetAttributes *FleetAttributes `json:"FleetAttributes,omitempty"`
	LocationStates  []LocationState  `json:"LocationStates,omitempty"`
}
