package shared

type ApprovalResult struct {
	Status  ApprovalStatusEnum `json:"status"`
	Summary string             `json:"summary"`
}
