package shared

// ListProjectsRequest
// Represents a request to the list projects operation.
type ListProjectsRequest struct {
	Arn       *string `json:"arn,omitempty"`
	NextToken *string `json:"nextToken,omitempty"`
}
