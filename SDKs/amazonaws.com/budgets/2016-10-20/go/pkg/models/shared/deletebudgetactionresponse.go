package shared



type DeleteBudgetActionResponse struct {
    AccountID string `json:"AccountId"`
    Action Action `json:"Action"`
    BudgetName string `json:"BudgetName"`
    
}

