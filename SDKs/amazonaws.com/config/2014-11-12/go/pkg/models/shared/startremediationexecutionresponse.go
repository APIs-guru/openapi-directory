package shared

type StartRemediationExecutionResponse struct {
	FailedItems    []ResourceKey `json:"FailedItems,omitempty"`
	FailureMessage *string       `json:"FailureMessage,omitempty"`
}
