package shared

type ListCodeReviewsResponse struct {
	CodeReviewSummaries []CodeReviewSummary `json:"CodeReviewSummaries"`
	NextToken           *string             `json:"NextToken"`
}
