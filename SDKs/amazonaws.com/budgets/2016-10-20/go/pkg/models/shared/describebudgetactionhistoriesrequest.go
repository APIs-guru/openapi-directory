package shared

type DescribeBudgetActionHistoriesRequest struct {
	AccountID  string      `json:"AccountId"`
	ActionID   string      `json:"ActionId"`
	BudgetName string      `json:"BudgetName"`
	MaxResults *int64      `json:"MaxResults,omitempty"`
	NextToken  *string     `json:"NextToken,omitempty"`
	TimePeriod *TimePeriod `json:"TimePeriod,omitempty"`
}
