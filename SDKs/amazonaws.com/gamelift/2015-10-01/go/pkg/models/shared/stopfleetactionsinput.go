package shared



type StopFleetActionsInput struct {
    Actions []FleetActionEnum `json:"Actions"`
    FleetID string `json:"FleetId"`
    Location *string `json:"Location,omitempty"`
    
}

