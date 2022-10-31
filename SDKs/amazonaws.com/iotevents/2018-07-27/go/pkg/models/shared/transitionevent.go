package shared



type TransitionEvent struct {
    Actions []Action `json:"actions,omitempty"`
    Condition string `json:"condition"`
    EventName string `json:"eventName"`
    NextState string `json:"nextState"`
    
}

