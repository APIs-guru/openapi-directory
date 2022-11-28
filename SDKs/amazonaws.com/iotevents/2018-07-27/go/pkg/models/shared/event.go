package shared

// Event
// Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
type Event struct {
	Actions   []Action `json:"actions,omitempty"`
	Condition *string  `json:"condition,omitempty"`
	EventName string   `json:"eventName"`
}
