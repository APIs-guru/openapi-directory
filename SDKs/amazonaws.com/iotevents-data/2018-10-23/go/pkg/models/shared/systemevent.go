package shared

// SystemEvent
// Contains information about alarm state changes.
type SystemEvent struct {
	EventType                *EventTypeEnum            `json:"eventType,omitempty"`
	StateChangeConfiguration *StateChangeConfiguration `json:"stateChangeConfiguration,omitempty"`
}
