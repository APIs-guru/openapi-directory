package shared

// EventSource
// Specifies an event that triggers an event-based policy.
type EventSource struct {
	Parameters *EventParameters      `json:"Parameters,omitempty"`
	Type       EventSourceValuesEnum `json:"Type"`
}
