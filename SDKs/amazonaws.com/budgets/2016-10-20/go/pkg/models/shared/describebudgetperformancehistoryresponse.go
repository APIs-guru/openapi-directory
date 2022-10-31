package shared



type DescribeBudgetPerformanceHistoryResponse struct {
    BudgetPerformanceHistory *BudgetPerformanceHistory `json:"BudgetPerformanceHistory,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

