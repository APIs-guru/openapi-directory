package shared



type UpdateBudgetActionRequest struct {
    AccountID string `json:"AccountId"`
    ActionID string `json:"ActionId"`
    ActionThreshold *ActionThreshold `json:"ActionThreshold,omitempty"`
    ApprovalModel *ApprovalModelEnum `json:"ApprovalModel,omitempty"`
    BudgetName string `json:"BudgetName"`
    Definition *Definition `json:"Definition,omitempty"`
    ExecutionRoleArn *string `json:"ExecutionRoleArn,omitempty"`
    NotificationType *NotificationTypeEnum `json:"NotificationType,omitempty"`
    Subscribers []Subscriber `json:"Subscribers,omitempty"`
    
}

