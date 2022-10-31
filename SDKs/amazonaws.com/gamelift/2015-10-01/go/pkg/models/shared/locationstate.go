package shared



type LocationState struct {
    Location *string `json:"Location,omitempty"`
    Status *FleetStatusEnum `json:"Status,omitempty"`
    
}

