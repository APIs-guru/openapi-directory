package shared

type CreatePipelineResponse struct {
	Pipeline *Pipeline `json:"Pipeline,omitempty"`
	Warnings []Warning `json:"Warnings,omitempty"`
}
