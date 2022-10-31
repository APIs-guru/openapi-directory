package shared

type ListAssessmentRunAgentsRequest struct {
	AssessmentRunArn string       `json:"assessmentRunArn"`
	Filter           *AgentFilter `json:"filter,omitempty"`
	MaxResults       *int64       `json:"maxResults,omitempty"`
	NextToken        *string      `json:"nextToken,omitempty"`
}
