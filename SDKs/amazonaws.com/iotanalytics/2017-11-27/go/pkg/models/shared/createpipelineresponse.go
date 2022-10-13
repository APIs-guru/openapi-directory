package shared

type CreatePipelineResponse struct {
	PipelineArn  *string `json:"pipelineArn"`
	PipelineName *string `json:"pipelineName"`
}
