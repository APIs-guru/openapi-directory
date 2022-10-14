package shared

type ListPipelineExecutionsOutput struct {
	NextToken                  *string                    `json:"nextToken,omitempty"`
	PipelineExecutionSummaries []PipelineExecutionSummary `json:"pipelineExecutionSummaries,omitempty"`
}
