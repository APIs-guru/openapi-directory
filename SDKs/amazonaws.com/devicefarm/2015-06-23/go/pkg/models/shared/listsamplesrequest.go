package shared

// ListSamplesRequest
// Represents a request to the list samples operation.
type ListSamplesRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
