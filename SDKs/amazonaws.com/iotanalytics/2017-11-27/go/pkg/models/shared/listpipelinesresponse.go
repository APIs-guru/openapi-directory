package shared

type ListPipelinesResponse struct {
	NextToken         *string           `json:"nextToken"`
	PipelineSummaries []PipelineSummary `json:"pipelineSummaries"`
}
