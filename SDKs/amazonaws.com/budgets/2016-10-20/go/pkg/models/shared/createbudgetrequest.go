package shared

type CreateBudgetRequest struct {
	AccountID                    string                        `json:"AccountId"`
	Budget                       Budget                        `json:"Budget"`
	NotificationsWithSubscribers []NotificationWithSubscribers `json:"NotificationsWithSubscribers,omitempty"`
}
