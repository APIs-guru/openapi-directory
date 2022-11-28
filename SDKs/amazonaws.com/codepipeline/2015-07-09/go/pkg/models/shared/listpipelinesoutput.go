package shared

// ListPipelinesOutput
// Represents the output of a <code>ListPipelines</code> action.
type ListPipelinesOutput struct {
	NextToken *string           `json:"nextToken,omitempty"`
	Pipelines []PipelineSummary `json:"pipelines,omitempty"`
}
