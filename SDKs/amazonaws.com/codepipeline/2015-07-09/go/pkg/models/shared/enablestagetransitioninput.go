package shared

// EnableStageTransitionInput
// Represents the input of an <code>EnableStageTransition</code> action.
type EnableStageTransitionInput struct {
	PipelineName   string                  `json:"pipelineName"`
	StageName      string                  `json:"stageName"`
	TransitionType StageTransitionTypeEnum `json:"transitionType"`
}
