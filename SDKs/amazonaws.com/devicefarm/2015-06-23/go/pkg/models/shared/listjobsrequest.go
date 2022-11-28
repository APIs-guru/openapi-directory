package shared

// ListJobsRequest
// Represents a request to the list jobs operation.
type ListJobsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
