package shared

// UpdateAssessmentFrameworkControlSet
//
//	A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID.
type UpdateAssessmentFrameworkControlSet struct {
	Controls []CreateAssessmentFrameworkControl `json:"controls,omitempty"`
	ID       *string                            `json:"id,omitempty"`
	Name     string                             `json:"name"`
}
