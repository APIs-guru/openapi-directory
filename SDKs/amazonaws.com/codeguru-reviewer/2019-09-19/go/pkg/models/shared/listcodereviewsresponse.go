package shared

type ListCodeReviewsResponse struct {
	CodeReviewSummaries []CodeReviewSummary `json:"CodeReviewSummaries,omitempty"`
	NextToken           *string             `json:"NextToken,omitempty"`
}
