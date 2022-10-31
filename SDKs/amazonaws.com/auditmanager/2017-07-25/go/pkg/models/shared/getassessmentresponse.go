package shared

type GetAssessmentResponse struct {
	Assessment *Assessment `json:"assessment,omitempty"`
	UserRole   *Role       `json:"userRole,omitempty"`
}
