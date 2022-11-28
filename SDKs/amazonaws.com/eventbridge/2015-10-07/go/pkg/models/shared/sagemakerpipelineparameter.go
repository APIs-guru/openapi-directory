package shared

// SageMakerPipelineParameter
// Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
type SageMakerPipelineParameter struct {
	Name  string `json:"Name"`
	Value string `json:"Value"`
}
