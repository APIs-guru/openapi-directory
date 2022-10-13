package shared

type UpdateBudgetActionRequest struct {
	AccountID        string                `json:"AccountId"`
	ActionID         string                `json:"ActionId"`
	ActionThreshold  *ActionThreshold      `json:"ActionThreshold"`
	ApprovalModel    *ApprovalModelEnum    `json:"ApprovalModel"`
	BudgetName       string                `json:"BudgetName"`
	Definition       *Definition           `json:"Definition"`
	ExecutionRoleArn *string               `json:"ExecutionRoleArn"`
	NotificationType *NotificationTypeEnum `json:"NotificationType"`
	Subscribers      []Subscriber          `json:"Subscribers"`
}
