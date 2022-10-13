package shared

type ListAssessmentRunAgentsRequest struct {
	AssessmentRunArn string       `json:"assessmentRunArn"`
	Filter           *AgentFilter `json:"filter"`
	MaxResults       *int64       `json:"maxResults"`
	NextToken        *string      `json:"nextToken"`
}
