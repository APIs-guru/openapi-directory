package shared

type DescribeBudgetActionHistoriesRequest struct {
	AccountID  string      `json:"AccountId"`
	ActionID   string      `json:"ActionId"`
	BudgetName string      `json:"BudgetName"`
	MaxResults *int64      `json:"MaxResults"`
	NextToken  *string     `json:"NextToken"`
	TimePeriod *TimePeriod `json:"TimePeriod"`
}
