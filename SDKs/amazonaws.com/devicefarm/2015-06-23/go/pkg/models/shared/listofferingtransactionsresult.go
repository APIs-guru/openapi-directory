package shared



type ListOfferingTransactionsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    OfferingTransactions []OfferingTransaction `json:"offeringTransactions,omitempty"`
    
}

