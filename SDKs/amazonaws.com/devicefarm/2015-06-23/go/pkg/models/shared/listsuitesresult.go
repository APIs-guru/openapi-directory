package shared

// ListSuitesResult
// Represents the result of a list suites request.
type ListSuitesResult struct {
	NextToken *string `json:"nextToken,omitempty"`
	Suites    []Suite `json:"suites,omitempty"`
}
