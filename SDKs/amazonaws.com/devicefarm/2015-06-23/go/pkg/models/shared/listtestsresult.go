package shared

// ListTestsResult
// Represents the result of a list tests request.
type ListTestsResult struct {
	NextToken *string `json:"nextToken,omitempty"`
	Tests     []Test  `json:"tests,omitempty"`
}
