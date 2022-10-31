package shared



type DeleteRuleRequest struct {
    EventBusName *string `json:"EventBusName,omitempty"`
    Force *bool `json:"Force,omitempty"`
    Name string `json:"Name"`
    
}

