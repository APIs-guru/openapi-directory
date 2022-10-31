package shared



type BatchDeleteDelegationByAssessmentError struct {
    DelegationID *string `json:"delegationId,omitempty"`
    ErrorCode *string `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    
}

