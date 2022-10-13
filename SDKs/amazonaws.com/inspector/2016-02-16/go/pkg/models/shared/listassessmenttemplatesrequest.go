package shared

type ListAssessmentTemplatesRequest struct {
	AssessmentTargetArns []string                  `json:"assessmentTargetArns"`
	Filter               *AssessmentTemplateFilter `json:"filter"`
	MaxResults           *int64                    `json:"maxResults"`
	NextToken            *string                   `json:"nextToken"`
}
