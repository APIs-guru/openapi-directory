package shared

// ApprovalResult
// Represents information about the result of an approval request.
type ApprovalResult struct {
	Status  ApprovalStatusEnum `json:"status"`
	Summary string             `json:"summary"`
}
