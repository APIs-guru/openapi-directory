package shared

// DisableStageTransitionInput
// Represents the input of a <code>DisableStageTransition</code> action.
type DisableStageTransitionInput struct {
	PipelineName   string                  `json:"pipelineName"`
	Reason         string                  `json:"reason"`
	StageName      string                  `json:"stageName"`
	TransitionType StageTransitionTypeEnum `json:"transitionType"`
}
