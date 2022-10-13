package shared

type ListPipelinesOutput struct {
	NextToken *string           `json:"nextToken"`
	Pipelines []PipelineSummary `json:"pipelines"`
}
