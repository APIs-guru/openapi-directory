package shared

// ListSuitesRequest
// Represents a request to the list suites operation.
type ListSuitesRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
