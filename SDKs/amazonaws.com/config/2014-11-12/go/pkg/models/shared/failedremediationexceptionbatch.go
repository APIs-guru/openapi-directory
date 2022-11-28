package shared

// FailedRemediationExceptionBatch
// List of each of the failed remediation exceptions with specific reasons.
type FailedRemediationExceptionBatch struct {
	FailedItems    []RemediationException `json:"FailedItems,omitempty"`
	FailureMessage *string                `json:"FailureMessage,omitempty"`
}
