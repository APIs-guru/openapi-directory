package shared

type SageMakerPipelineParameters struct {
	PipelineParameterList []SageMakerPipelineParameter `json:"PipelineParameterList,omitempty"`
}
