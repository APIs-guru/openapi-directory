package shared

// UpdateNotificationRequest
//
//	Request of UpdateNotification
type UpdateNotificationRequest struct {
	AccountID       string       `json:"AccountId"`
	BudgetName      string       `json:"BudgetName"`
	NewNotification Notification `json:"NewNotification"`
	OldNotification Notification `json:"OldNotification"`
}
