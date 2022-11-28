package shared

// ListPipelinesInput
// Represents the input of a <code>ListPipelines</code> action.
type ListPipelinesInput struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}
