package shared



type DeleteRemediationExceptionsResponse struct {
    FailedBatches []FailedDeleteRemediationExceptionsBatch `json:"FailedBatches,omitempty"`
    
}

