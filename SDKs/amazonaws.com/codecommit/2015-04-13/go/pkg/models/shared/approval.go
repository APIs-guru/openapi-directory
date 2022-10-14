package shared

type Approval struct {
	ApprovalState *ApprovalStateEnum `json:"approvalState,omitempty"`
	UserArn       *string            `json:"userArn,omitempty"`
}
