package shared

type PutRemediationExceptionsResponse struct {
	FailedBatches []FailedRemediationExceptionBatch `json:"FailedBatches"`
}
