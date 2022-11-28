package shared

// ListPipelineExecutionsOutput
// Represents the output of a <code>ListPipelineExecutions</code> action.
type ListPipelineExecutionsOutput struct {
	NextToken                  *string                    `json:"nextToken,omitempty"`
	PipelineExecutionSummaries []PipelineExecutionSummary `json:"pipelineExecutionSummaries,omitempty"`
}
