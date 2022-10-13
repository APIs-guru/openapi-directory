package shared

type UpdateEnrollmentStatusResponse struct {
	Status       *StatusEnum `json:"status"`
	StatusReason *string     `json:"statusReason"`
}
