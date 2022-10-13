package shared

type CreateAssessmentFrameworkControlSet struct {
	Controls []CreateAssessmentFrameworkControl `json:"controls"`
	Name     string                             `json:"name"`
}
