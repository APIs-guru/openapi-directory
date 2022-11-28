package shared

// DescribeBudgetRequest
//
//	Request of DescribeBudget
type DescribeBudgetRequest struct {
	AccountID  string `json:"AccountId"`
	BudgetName string `json:"BudgetName"`
}
