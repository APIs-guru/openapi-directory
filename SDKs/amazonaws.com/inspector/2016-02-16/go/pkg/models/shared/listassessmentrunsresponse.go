package shared

type ListAssessmentRunsResponse struct {
	AssessmentRunArns []string `json:"assessmentRunArns"`
	NextToken         *string  `json:"nextToken"`
}
