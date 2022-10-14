package shared

type PutRemediationConfigurationsResponse struct {
	FailedBatches []FailedRemediationBatch `json:"FailedBatches,omitempty"`
}
