package shared

type CreatePipelineOutput struct {
	Pipeline *PipelineDeclaration `json:"pipeline"`
	Tags     []Tag                `json:"tags"`
}
