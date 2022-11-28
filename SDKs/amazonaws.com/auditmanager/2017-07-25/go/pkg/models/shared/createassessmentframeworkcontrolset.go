package shared

// CreateAssessmentFrameworkControlSet
//
//	A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID.
type CreateAssessmentFrameworkControlSet struct {
	Controls []CreateAssessmentFrameworkControl `json:"controls,omitempty"`
	Name     string                             `json:"name"`
}
