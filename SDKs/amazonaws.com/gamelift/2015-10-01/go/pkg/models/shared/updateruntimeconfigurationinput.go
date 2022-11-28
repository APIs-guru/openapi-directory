package shared

// UpdateRuntimeConfigurationInput
// Represents the input for a request operation.
type UpdateRuntimeConfigurationInput struct {
	FleetID              string               `json:"FleetId"`
	RuntimeConfiguration RuntimeConfiguration `json:"RuntimeConfiguration"`
}
