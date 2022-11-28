package shared

// StageState
// Represents information about the state of the stage.
type StageState struct {
	ActionStates           []ActionState    `json:"actionStates,omitempty"`
	InboundExecution       *StageExecution  `json:"inboundExecution,omitempty"`
	InboundTransitionState *TransitionState `json:"inboundTransitionState,omitempty"`
	LatestExecution        *StageExecution  `json:"latestExecution,omitempty"`
	StageName              *string          `json:"stageName,omitempty"`
}
