package shared

type OnInputLifecycle struct {
	Events           []Event           `json:"events"`
	TransitionEvents []TransitionEvent `json:"transitionEvents"`
}
