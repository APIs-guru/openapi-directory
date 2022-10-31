package shared



type RoutingStrategy struct {
    FleetID *string `json:"FleetId,omitempty"`
    Message *string `json:"Message,omitempty"`
    Type *RoutingStrategyTypeEnum `json:"Type,omitempty"`
    
}

