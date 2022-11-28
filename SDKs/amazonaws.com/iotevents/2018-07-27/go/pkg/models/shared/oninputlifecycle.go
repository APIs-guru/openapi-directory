package shared

// OnInputLifecycle
// Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
type OnInputLifecycle struct {
	Events           []Event           `json:"events,omitempty"`
	TransitionEvents []TransitionEvent `json:"transitionEvents,omitempty"`
}
