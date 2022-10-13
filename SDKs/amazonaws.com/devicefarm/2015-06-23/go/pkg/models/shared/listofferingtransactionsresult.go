package shared

type ListOfferingTransactionsResult struct {
	NextToken            *string               `json:"nextToken"`
	OfferingTransactions []OfferingTransaction `json:"offeringTransactions"`
}
