package shared

type GetAssessmentResponse struct {
	Assessment *Assessment `json:"assessment"`
	UserRole   *Role       `json:"userRole"`
}
