package shared

// ListSamplesResult
// Represents the result of a list samples request.
type ListSamplesResult struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Samples   []Sample `json:"samples,omitempty"`
}
