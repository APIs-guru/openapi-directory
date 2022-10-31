package shared



type FailedRemediationBatch struct {
    FailedItems []RemediationConfiguration `json:"FailedItems,omitempty"`
    FailureMessage *string `json:"FailureMessage,omitempty"`
    
}

