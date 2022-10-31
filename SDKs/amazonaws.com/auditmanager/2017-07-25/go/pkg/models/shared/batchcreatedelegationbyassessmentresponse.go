package shared

type BatchCreateDelegationByAssessmentResponse struct {
	Delegations []Delegation                             `json:"delegations,omitempty"`
	Errors      []BatchCreateDelegationByAssessmentError `json:"errors,omitempty"`
}
