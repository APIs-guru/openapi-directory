package shared



type CreateAssessmentTemplateRequest struct {
    AssessmentTargetArn string `json:"assessmentTargetArn"`
    AssessmentTemplateName string `json:"assessmentTemplateName"`
    DurationInSeconds int64 `json:"durationInSeconds"`
    RulesPackageArns []string `json:"rulesPackageArns"`
    UserAttributesForFindings []Attribute `json:"userAttributesForFindings,omitempty"`
    
}

