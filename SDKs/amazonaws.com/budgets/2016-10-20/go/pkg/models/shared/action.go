package shared

type Action struct {
	ActionID         string               `json:"ActionId"`
	ActionThreshold  ActionThreshold      `json:"ActionThreshold"`
	ActionType       ActionTypeEnum       `json:"ActionType"`
	ApprovalModel    ApprovalModelEnum    `json:"ApprovalModel"`
	BudgetName       string               `json:"BudgetName"`
	Definition       Definition           `json:"Definition"`
	ExecutionRoleArn string               `json:"ExecutionRoleArn"`
	NotificationType NotificationTypeEnum `json:"NotificationType"`
	Status           ActionStatusEnum     `json:"Status"`
	Subscribers      []Subscriber         `json:"Subscribers"`
}
