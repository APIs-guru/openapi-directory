package shared



type UpdateRuntimeConfigurationInput struct {
    FleetID string `json:"FleetId"`
    RuntimeConfiguration RuntimeConfiguration `json:"RuntimeConfiguration"`
    
}

