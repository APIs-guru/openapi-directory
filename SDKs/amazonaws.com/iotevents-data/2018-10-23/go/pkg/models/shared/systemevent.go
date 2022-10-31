package shared



type SystemEvent struct {
    EventType *EventTypeEnum `json:"eventType,omitempty"`
    StateChangeConfiguration *StateChangeConfiguration `json:"stateChangeConfiguration,omitempty"`
    
}

