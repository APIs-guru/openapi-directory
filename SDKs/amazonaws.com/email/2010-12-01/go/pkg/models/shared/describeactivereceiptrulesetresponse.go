package shared

// DescribeActiveReceiptRuleSetResponse
// Represents the metadata and receipt rules for the receipt rule set that is currently active.
type DescribeActiveReceiptRuleSetResponse struct {
	Metadata *ReceiptRuleSetMetadata
	Rules    []ReceiptRule
}
