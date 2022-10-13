package shared

type StageState struct {
	ActionStates           []ActionState    `json:"actionStates"`
	InboundExecution       *StageExecution  `json:"inboundExecution"`
	InboundTransitionState *TransitionState `json:"inboundTransitionState"`
	LatestExecution        *StageExecution  `json:"latestExecution"`
	StageName              *string          `json:"stageName"`
}
