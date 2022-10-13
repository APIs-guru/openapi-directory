package shared

type ListAssessmentRunAgentsResponse struct {
	AssessmentRunAgents []AssessmentRunAgent `json:"assessmentRunAgents"`
	NextToken           *string              `json:"nextToken"`
}
