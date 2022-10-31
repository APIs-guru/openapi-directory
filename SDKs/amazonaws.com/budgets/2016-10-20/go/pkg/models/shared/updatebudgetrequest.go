package shared



type UpdateBudgetRequest struct {
    AccountID string `json:"AccountId"`
    NewBudget Budget `json:"NewBudget"`
    
}

