package shared

// Approval
// Returns information about a specific approval on a pull request.
type Approval struct {
	ApprovalState *ApprovalStateEnum `json:"approvalState,omitempty"`
	UserArn       *string            `json:"userArn,omitempty"`
}
