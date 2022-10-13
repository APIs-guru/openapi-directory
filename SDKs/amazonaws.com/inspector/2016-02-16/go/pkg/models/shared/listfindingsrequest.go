package shared

type ListFindingsRequest struct {
	AssessmentRunArns []string       `json:"assessmentRunArns"`
	Filter            *FindingFilter `json:"filter"`
	MaxResults        *int64         `json:"maxResults"`
	NextToken         *string        `json:"nextToken"`
}
