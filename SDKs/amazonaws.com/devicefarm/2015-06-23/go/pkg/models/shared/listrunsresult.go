package shared

// ListRunsResult
// Represents the result of a list runs request.
type ListRunsResult struct {
	NextToken *string `json:"nextToken,omitempty"`
	Runs      []Run   `json:"runs,omitempty"`
}
