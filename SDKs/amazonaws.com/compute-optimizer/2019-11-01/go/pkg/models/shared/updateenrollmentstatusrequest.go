package shared



type UpdateEnrollmentStatusRequest struct {
    IncludeMemberAccounts *bool `json:"includeMemberAccounts,omitempty"`
    Status StatusEnum `json:"status"`
    
}

