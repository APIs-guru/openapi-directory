package shared



type Event struct {
    Actions []Action `json:"actions,omitempty"`
    Condition *string `json:"condition,omitempty"`
    EventName string `json:"eventName"`
    
}

