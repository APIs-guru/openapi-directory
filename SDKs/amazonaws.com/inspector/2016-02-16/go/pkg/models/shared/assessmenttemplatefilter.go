package shared

type AssessmentTemplateFilter struct {
	DurationRange    *DurationRange `json:"durationRange"`
	NamePattern      *string        `json:"namePattern"`
	RulesPackageArns []string       `json:"rulesPackageArns"`
}
