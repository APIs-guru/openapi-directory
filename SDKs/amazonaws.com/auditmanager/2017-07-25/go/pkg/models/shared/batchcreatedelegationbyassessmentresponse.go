package shared

type BatchCreateDelegationByAssessmentResponse struct {
	Delegations []Delegation                             `json:"delegations"`
	Errors      []BatchCreateDelegationByAssessmentError `json:"errors"`
}
