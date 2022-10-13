package shared

type StartRemediationExecutionResponse struct {
	FailedItems    []ResourceKey `json:"FailedItems"`
	FailureMessage *string       `json:"FailureMessage"`
}
