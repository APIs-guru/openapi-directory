package shared



type FailedRemediationExceptionBatch struct {
    FailedItems []RemediationException `json:"FailedItems,omitempty"`
    FailureMessage *string `json:"FailureMessage,omitempty"`
    
}

