package shared



type UpdateEnrollmentStatusResponse struct {
    Status *StatusEnum `json:"status,omitempty"`
    StatusReason *string `json:"statusReason,omitempty"`
    
}

