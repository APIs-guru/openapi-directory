package shared

// ListOfferingTransactionsRequest
// Represents the request to list the offering transaction history.
type ListOfferingTransactionsRequest struct {
	NextToken *string `json:"nextToken,omitempty"`
}
