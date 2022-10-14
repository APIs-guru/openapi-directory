package shared

type OnInputLifecycle struct {
	Events           []Event           `json:"events,omitempty"`
	TransitionEvents []TransitionEvent `json:"transitionEvents,omitempty"`
}
