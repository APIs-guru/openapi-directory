package shared

type BatchCreateDelegationByAssessmentError struct {
	CreateDelegationRequest *CreateDelegationRequest `json:"createDelegationRequest"`
	ErrorCode               *string                  `json:"errorCode"`
	ErrorMessage            *string                  `json:"errorMessage"`
}
