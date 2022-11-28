package shared

// UpdateBudgetRequest
//
//	Request of UpdateBudget
type UpdateBudgetRequest struct {
	AccountID string `json:"AccountId"`
	NewBudget Budget `json:"NewBudget"`
}
