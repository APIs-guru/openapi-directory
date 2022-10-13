package shared

type EventSource struct {
	Parameters *EventParameters      `json:"Parameters"`
	Type       EventSourceValuesEnum `json:"Type"`
}
