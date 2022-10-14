package shared

type FailedDeleteRemediationExceptionsBatch struct {
	FailedItems    []RemediationExceptionResourceKey `json:"FailedItems,omitempty"`
	FailureMessage *string                           `json:"FailureMessage,omitempty"`
}
