package shared

// SageMakerPipelineParameters
// These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
type SageMakerPipelineParameters struct {
	PipelineParameterList []SageMakerPipelineParameter `json:"PipelineParameterList,omitempty"`
}
