package shared

// State
// Information that defines a state of a detector.
type State struct {
	OnEnter   *OnEnterLifecycle `json:"onEnter,omitempty"`
	OnExit    *OnExitLifecycle  `json:"onExit,omitempty"`
	OnInput   *OnInputLifecycle `json:"onInput,omitempty"`
	StateName string            `json:"stateName"`
}
