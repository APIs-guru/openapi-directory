package shared

type State struct {
	OnEnter   *OnEnterLifecycle `json:"onEnter"`
	OnExit    *OnExitLifecycle  `json:"onExit"`
	OnInput   *OnInputLifecycle `json:"onInput"`
	StateName string            `json:"stateName"`
}
