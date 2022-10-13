package shared

type FailedDeleteRemediationExceptionsBatch struct {
	FailedItems    []RemediationExceptionResourceKey `json:"FailedItems"`
	FailureMessage *string                           `json:"FailureMessage"`
}
