package shared

type ListAssessmentTargetsResponse struct {
	AssessmentTargetArns []string `json:"assessmentTargetArns"`
	NextToken            *string  `json:"nextToken"`
}
