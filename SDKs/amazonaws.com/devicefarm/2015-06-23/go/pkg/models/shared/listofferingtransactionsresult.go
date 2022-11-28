package shared

// ListOfferingTransactionsResult
// Returns the transaction log of the specified offerings.
type ListOfferingTransactionsResult struct {
	NextToken            *string               `json:"nextToken,omitempty"`
	OfferingTransactions []OfferingTransaction `json:"offeringTransactions,omitempty"`
}
