package shared

// CreateDelegationRequest
//
//	A collection of attributes used to create a delegation for an assessment in Audit Manager.
type CreateDelegationRequest struct {
	Comment      *string       `json:"comment,omitempty"`
	ControlSetID *string       `json:"controlSetId,omitempty"`
	RoleArn      *string       `json:"roleArn,omitempty"`
	RoleType     *RoleTypeEnum `json:"roleType,omitempty"`
}
