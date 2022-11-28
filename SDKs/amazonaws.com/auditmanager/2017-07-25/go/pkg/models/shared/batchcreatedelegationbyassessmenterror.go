package shared

// BatchCreateDelegationByAssessmentError
//
//	An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
type BatchCreateDelegationByAssessmentError struct {
	CreateDelegationRequest *CreateDelegationRequest `json:"createDelegationRequest,omitempty"`
	ErrorCode               *string                  `json:"errorCode,omitempty"`
	ErrorMessage            *string                  `json:"errorMessage,omitempty"`
}
