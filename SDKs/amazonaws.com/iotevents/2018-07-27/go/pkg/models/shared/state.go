package shared



type State struct {
    OnEnter *OnEnterLifecycle `json:"onEnter,omitempty"`
    OnExit *OnExitLifecycle `json:"onExit,omitempty"`
    OnInput *OnInputLifecycle `json:"onInput,omitempty"`
    StateName string `json:"stateName"`
    
}

