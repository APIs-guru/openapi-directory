package shared

// ListTestsRequest
// Represents a request to the list tests operation.
type ListTestsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
