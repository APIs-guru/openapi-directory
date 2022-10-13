package shared

type DescribeBudgetPerformanceHistoryResponse struct {
	BudgetPerformanceHistory *BudgetPerformanceHistory `json:"BudgetPerformanceHistory"`
	NextToken                *string                   `json:"NextToken"`
}
