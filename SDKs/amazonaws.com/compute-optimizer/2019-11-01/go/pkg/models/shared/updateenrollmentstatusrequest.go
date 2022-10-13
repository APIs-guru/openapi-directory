package shared

type UpdateEnrollmentStatusRequest struct {
	IncludeMemberAccounts *bool      `json:"includeMemberAccounts"`
	Status                StatusEnum `json:"status"`
}
