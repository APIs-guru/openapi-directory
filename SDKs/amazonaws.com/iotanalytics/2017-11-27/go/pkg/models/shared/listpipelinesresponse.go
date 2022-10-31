package shared

type ListPipelinesResponse struct {
	NextToken         *string           `json:"nextToken,omitempty"`
	PipelineSummaries []PipelineSummary `json:"pipelineSummaries,omitempty"`
}
