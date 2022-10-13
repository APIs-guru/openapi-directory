package shared

type ListActionExecutionsInput struct {
	Filter       *ActionExecutionFilter `json:"filter"`
	MaxResults   *int64                 `json:"maxResults"`
	NextToken    *string                `json:"nextToken"`
	PipelineName string                 `json:"pipelineName"`
}
