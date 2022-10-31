package shared



type BatchCreateDelegationByAssessmentError struct {
    CreateDelegationRequest *CreateDelegationRequest `json:"createDelegationRequest,omitempty"`
    ErrorCode *string `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    
}

