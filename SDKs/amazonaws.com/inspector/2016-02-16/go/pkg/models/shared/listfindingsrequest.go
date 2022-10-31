package shared

type ListFindingsRequest struct {
	AssessmentRunArns []string       `json:"assessmentRunArns,omitempty"`
	Filter            *FindingFilter `json:"filter,omitempty"`
	MaxResults        *int64         `json:"maxResults,omitempty"`
	NextToken         *string        `json:"nextToken,omitempty"`
}
