package shared

type CreateBudgetActionRequest struct {
	AccountID        string               `json:"AccountId"`
	ActionThreshold  ActionThreshold      `json:"ActionThreshold"`
	ActionType       ActionTypeEnum       `json:"ActionType"`
	ApprovalModel    ApprovalModelEnum    `json:"ApprovalModel"`
	BudgetName       string               `json:"BudgetName"`
	Definition       Definition           `json:"Definition"`
	ExecutionRoleArn string               `json:"ExecutionRoleArn"`
	NotificationType NotificationTypeEnum `json:"NotificationType"`
	Subscribers      []Subscriber         `json:"Subscribers"`
}
