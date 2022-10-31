package shared



type DescribeBudgetActionResponse struct {
    AccountID string `json:"AccountId"`
    Action Action `json:"Action"`
    BudgetName string `json:"BudgetName"`
    
}

