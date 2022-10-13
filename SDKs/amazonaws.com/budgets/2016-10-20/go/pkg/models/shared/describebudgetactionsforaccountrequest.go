package shared

type DescribeBudgetActionsForAccountRequest struct {
	AccountID  string  `json:"AccountId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
