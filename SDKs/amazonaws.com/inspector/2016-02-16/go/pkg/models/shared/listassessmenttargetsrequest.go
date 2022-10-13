package shared

type ListAssessmentTargetsRequest struct {
	Filter     *AssessmentTargetFilter `json:"filter"`
	MaxResults *int64                  `json:"maxResults"`
	NextToken  *string                 `json:"nextToken"`
}
