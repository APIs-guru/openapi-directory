package shared

type SystemEvent struct {
	EventType                *EventTypeEnum            `json:"eventType"`
	StateChangeConfiguration *StateChangeConfiguration `json:"stateChangeConfiguration"`
}
