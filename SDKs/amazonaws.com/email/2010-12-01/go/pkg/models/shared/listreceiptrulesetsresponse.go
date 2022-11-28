package shared

// ListReceiptRuleSetsResponse
// A list of receipt rule sets that exist under your AWS account.
type ListReceiptRuleSetsResponse struct {
	NextToken *string
	RuleSets  []ReceiptRuleSetMetadata
}
