package shared

type FailedRemediationBatch struct {
	FailedItems    []RemediationConfiguration `json:"FailedItems"`
	FailureMessage *string                    `json:"FailureMessage"`
}
