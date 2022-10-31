package shared



type StartFleetActionsInput struct {
    Actions []FleetActionEnum `json:"Actions"`
    FleetID string `json:"FleetId"`
    Location *string `json:"Location,omitempty"`
    
}

