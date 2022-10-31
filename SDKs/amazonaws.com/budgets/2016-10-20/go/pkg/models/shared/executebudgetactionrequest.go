package shared

type ExecuteBudgetActionRequest struct {
	AccountID     string            `json:"AccountId"`
	ActionID      string            `json:"ActionId"`
	BudgetName    string            `json:"BudgetName"`
	ExecutionType ExecutionTypeEnum `json:"ExecutionType"`
}
