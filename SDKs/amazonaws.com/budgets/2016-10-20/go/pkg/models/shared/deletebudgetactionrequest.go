package shared



type DeleteBudgetActionRequest struct {
    AccountID string `json:"AccountId"`
    ActionID string `json:"ActionId"`
    BudgetName string `json:"BudgetName"`
    
}

