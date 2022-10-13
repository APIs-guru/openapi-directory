package shared

type UpdateAssessmentFrameworkControlSet struct {
	Controls []CreateAssessmentFrameworkControl `json:"controls"`
	ID       *string                            `json:"id"`
	Name     string                             `json:"name"`
}
