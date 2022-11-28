package shared

// AssessmentTemplateFilter
// Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
type AssessmentTemplateFilter struct {
	DurationRange    *DurationRange `json:"durationRange,omitempty"`
	NamePattern      *string        `json:"namePattern,omitempty"`
	RulesPackageArns []string       `json:"rulesPackageArns,omitempty"`
}
