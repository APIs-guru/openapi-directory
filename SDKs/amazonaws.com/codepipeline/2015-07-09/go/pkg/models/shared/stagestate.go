package shared

type StageState struct {
	ActionStates           []ActionState    `json:"actionStates,omitempty"`
	InboundExecution       *StageExecution  `json:"inboundExecution,omitempty"`
	InboundTransitionState *TransitionState `json:"inboundTransitionState,omitempty"`
	LatestExecution        *StageExecution  `json:"latestExecution,omitempty"`
	StageName              *string          `json:"stageName,omitempty"`
}
