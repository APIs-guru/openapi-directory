package shared

type EventSource struct {
	Parameters *EventParameters      `json:"Parameters,omitempty"`
	Type       EventSourceValuesEnum `json:"Type"`
}
