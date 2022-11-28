package shared

// CreateBudgetRequest
//
//	Request of CreateBudget
type CreateBudgetRequest struct {
	AccountID                    string                        `json:"AccountId"`
	Budget                       Budget                        `json:"Budget"`
	NotificationsWithSubscribers []NotificationWithSubscribers `json:"NotificationsWithSubscribers,omitempty"`
}
