package shared

// DeleteBudgetRequest
//
//	Request of DeleteBudget
type DeleteBudgetRequest struct {
	AccountID  string `json:"AccountId"`
	BudgetName string `json:"BudgetName"`
}
