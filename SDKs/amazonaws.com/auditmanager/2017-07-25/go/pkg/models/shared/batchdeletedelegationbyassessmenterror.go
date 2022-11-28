package shared

// BatchDeleteDelegationByAssessmentError
//
//	An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
type BatchDeleteDelegationByAssessmentError struct {
	DelegationID *string `json:"delegationId,omitempty"`
	ErrorCode    *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
}
