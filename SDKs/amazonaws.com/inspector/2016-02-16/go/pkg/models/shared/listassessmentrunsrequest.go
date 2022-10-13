package shared

type ListAssessmentRunsRequest struct {
	AssessmentTemplateArns []string             `json:"assessmentTemplateArns"`
	Filter                 *AssessmentRunFilter `json:"filter"`
	MaxResults             *int64               `json:"maxResults"`
	NextToken              *string              `json:"nextToken"`
}
