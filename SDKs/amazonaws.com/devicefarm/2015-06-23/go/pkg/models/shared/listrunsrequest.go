package shared

// ListRunsRequest
// Represents a request to the list runs operation.
type ListRunsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
