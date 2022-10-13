package shared

type DescribeNotificationsForBudgetRequest struct {
	AccountID  string  `json:"AccountId"`
	BudgetName string  `json:"BudgetName"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
