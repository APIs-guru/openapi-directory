package shared

type ListPipelineExecutionsOutput struct {
	NextToken                  *string                    `json:"nextToken"`
	PipelineExecutionSummaries []PipelineExecutionSummary `json:"pipelineExecutionSummaries"`
}
