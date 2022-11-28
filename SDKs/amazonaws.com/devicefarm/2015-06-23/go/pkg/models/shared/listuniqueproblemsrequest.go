package shared

// ListUniqueProblemsRequest
// Represents a request to the list unique problems operation.
type ListUniqueProblemsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
