package shared

// DeleteNotificationRequest
//
//	Request of DeleteNotification
type DeleteNotificationRequest struct {
	AccountID    string       `json:"AccountId"`
	BudgetName   string       `json:"BudgetName"`
	Notification Notification `json:"Notification"`
}
