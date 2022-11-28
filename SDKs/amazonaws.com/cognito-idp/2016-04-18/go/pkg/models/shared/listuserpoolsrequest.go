package shared

// ListUserPoolsRequest
// Represents the request to list user pools.
type ListUserPoolsRequest struct {
	MaxResults int64   `json:"MaxResults"`
	NextToken  *string `json:"NextToken,omitempty"`
}
