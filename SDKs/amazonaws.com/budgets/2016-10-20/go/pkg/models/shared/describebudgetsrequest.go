package shared

// DescribeBudgetsRequest
//
//	Request of DescribeBudgets
type DescribeBudgetsRequest struct {
	AccountID  string  `json:"AccountId"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
