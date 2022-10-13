package shared

type FailedRemediationExceptionBatch struct {
	FailedItems    []RemediationException `json:"FailedItems"`
	FailureMessage *string                `json:"FailureMessage"`
}
