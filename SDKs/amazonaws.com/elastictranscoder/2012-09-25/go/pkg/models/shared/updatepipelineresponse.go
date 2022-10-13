package shared

type UpdatePipelineResponse struct {
	Pipeline *Pipeline `json:"Pipeline"`
	Warnings []Warning `json:"Warnings"`
}
