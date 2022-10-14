package shared

type CreatePipelineInput struct {
	Pipeline PipelineDeclaration `json:"pipeline"`
	Tags     []Tag               `json:"tags,omitempty"`
}
