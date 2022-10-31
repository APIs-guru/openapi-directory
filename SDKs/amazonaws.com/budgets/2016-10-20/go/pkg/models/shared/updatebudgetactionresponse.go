package shared



type UpdateBudgetActionResponse struct {
    AccountID string `json:"AccountId"`
    BudgetName string `json:"BudgetName"`
    NewAction Action `json:"NewAction"`
    OldAction Action `json:"OldAction"`
    
}

