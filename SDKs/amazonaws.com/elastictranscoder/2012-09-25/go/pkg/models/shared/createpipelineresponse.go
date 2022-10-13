package shared

type CreatePipelineResponse struct {
	Pipeline *Pipeline `json:"Pipeline"`
	Warnings []Warning `json:"Warnings"`
}
