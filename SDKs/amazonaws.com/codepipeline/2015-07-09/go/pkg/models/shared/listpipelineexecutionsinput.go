package shared

// ListPipelineExecutionsInput
// Represents the input of a <code>ListPipelineExecutions</code> action.
type ListPipelineExecutionsInput struct {
	MaxResults   *int64  `json:"maxResults,omitempty"`
	NextToken    *string `json:"nextToken,omitempty"`
	PipelineName string  `json:"pipelineName"`
}
