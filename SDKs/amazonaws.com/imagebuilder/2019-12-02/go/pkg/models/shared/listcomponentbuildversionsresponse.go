package shared

type ListComponentBuildVersionsResponse struct {
	ComponentSummaryList []ComponentSummary `json:"componentSummaryList"`
	NextToken            *string            `json:"nextToken"`
	RequestID            *string            `json:"requestId"`
}
