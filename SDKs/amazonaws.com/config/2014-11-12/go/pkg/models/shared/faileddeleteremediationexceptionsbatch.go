package shared

// FailedDeleteRemediationExceptionsBatch
// List of each of the failed delete remediation exceptions with specific reasons.
type FailedDeleteRemediationExceptionsBatch struct {
	FailedItems    []RemediationExceptionResourceKey `json:"FailedItems,omitempty"`
	FailureMessage *string                           `json:"FailureMessage,omitempty"`
}
