package shared

// DescribeReceiptRuleSetResponse
// Represents the details of the specified receipt rule set.
type DescribeReceiptRuleSetResponse struct {
	Metadata *ReceiptRuleSetMetadata
	Rules    []ReceiptRule
}
