package shared

type Approval struct {
	ApprovalState *ApprovalStateEnum `json:"approvalState"`
	UserArn       *string            `json:"userArn"`
}
