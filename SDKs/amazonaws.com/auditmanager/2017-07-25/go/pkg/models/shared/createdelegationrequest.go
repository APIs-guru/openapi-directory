package shared

type CreateDelegationRequest struct {
	Comment      *string       `json:"comment"`
	ControlSetID *string       `json:"controlSetId"`
	RoleArn      *string       `json:"roleArn"`
	RoleType     *RoleTypeEnum `json:"roleType"`
}
