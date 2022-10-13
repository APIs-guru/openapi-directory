package shared

type ReadPipelineResponse struct {
	Pipeline *Pipeline `json:"Pipeline"`
	Warnings []Warning `json:"Warnings"`
}
