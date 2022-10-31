package shared

type DescribeBudgetPerformanceHistoryRequest struct {
	AccountID  string      `json:"AccountId"`
	BudgetName string      `json:"BudgetName"`
	MaxResults *int64      `json:"MaxResults,omitempty"`
	NextToken  *string     `json:"NextToken,omitempty"`
	TimePeriod *TimePeriod `json:"TimePeriod,omitempty"`
}
