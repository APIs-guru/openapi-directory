package shared

// FailedRemediationBatch
// List of each of the failed remediations with specific reasons.
type FailedRemediationBatch struct {
	FailedItems    []RemediationConfiguration `json:"FailedItems,omitempty"`
	FailureMessage *string                    `json:"FailureMessage,omitempty"`
}
