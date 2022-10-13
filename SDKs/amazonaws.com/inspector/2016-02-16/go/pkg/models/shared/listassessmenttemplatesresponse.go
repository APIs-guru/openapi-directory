package shared

type ListAssessmentTemplatesResponse struct {
	AssessmentTemplateArns []string `json:"assessmentTemplateArns"`
	NextToken              *string  `json:"nextToken"`
}
