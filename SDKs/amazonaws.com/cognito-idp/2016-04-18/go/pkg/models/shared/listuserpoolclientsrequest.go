package shared

// ListUserPoolClientsRequest
// Represents the request to list the user pool clients.
type ListUserPoolClientsRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	UserPoolID string  `json:"UserPoolId"`
}
