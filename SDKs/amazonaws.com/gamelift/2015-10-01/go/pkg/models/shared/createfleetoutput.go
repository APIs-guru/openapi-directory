package shared

type CreateFleetOutput struct {
	FleetAttributes *FleetAttributes `json:"FleetAttributes"`
	LocationStates  []LocationState  `json:"LocationStates"`
}
