package shared

type ListExclusionsRequest struct {
	AssessmentRunArn string  `json:"assessmentRunArn"`
	MaxResults       *int64  `json:"maxResults"`
	NextToken        *string `json:"nextToken"`
}
