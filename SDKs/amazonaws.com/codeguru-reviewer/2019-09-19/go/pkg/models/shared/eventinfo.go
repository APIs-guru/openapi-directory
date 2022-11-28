package shared

// EventInfo
// Information about an event. The event might be a push, pull request, scheduled request, or another type of event.
type EventInfo struct {
	Name  *string `json:"Name,omitempty"`
	State *string `json:"State,omitempty"`
}
