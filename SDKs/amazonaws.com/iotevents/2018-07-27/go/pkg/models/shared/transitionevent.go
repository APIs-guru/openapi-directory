package shared

// TransitionEvent
// Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
type TransitionEvent struct {
	Actions   []Action `json:"actions,omitempty"`
	Condition string   `json:"condition"`
	EventName string   `json:"eventName"`
	NextState string   `json:"nextState"`
}
