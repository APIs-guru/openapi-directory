package shared

type ListPipelineExecutionsInput struct {
	MaxResults   *int64  `json:"maxResults"`
	NextToken    *string `json:"nextToken"`
	PipelineName string  `json:"pipelineName"`
}
