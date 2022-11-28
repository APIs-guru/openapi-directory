package shared

// AssessmentTargetFilter
// Used as the request parameter in the <a>ListAssessmentTargets</a> action.
type AssessmentTargetFilter struct {
	AssessmentTargetNamePattern *string `json:"assessmentTargetNamePattern,omitempty"`
}
