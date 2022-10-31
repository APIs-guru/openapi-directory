package shared



type AssessmentTemplateFilter struct {
    DurationRange *DurationRange `json:"durationRange,omitempty"`
    NamePattern *string `json:"namePattern,omitempty"`
    RulesPackageArns []string `json:"rulesPackageArns,omitempty"`
    
}

