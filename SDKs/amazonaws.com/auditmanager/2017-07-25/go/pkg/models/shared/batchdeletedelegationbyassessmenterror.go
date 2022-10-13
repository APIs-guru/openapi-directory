package shared

type BatchDeleteDelegationByAssessmentError struct {
	DelegationID *string `json:"delegationId"`
	ErrorCode    *string `json:"errorCode"`
	ErrorMessage *string `json:"errorMessage"`
}
