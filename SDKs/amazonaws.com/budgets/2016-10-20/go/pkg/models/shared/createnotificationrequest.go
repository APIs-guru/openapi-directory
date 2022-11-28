package shared

// CreateNotificationRequest
//
//	Request of CreateNotification
type CreateNotificationRequest struct {
	AccountID    string       `json:"AccountId"`
	BudgetName   string       `json:"BudgetName"`
	Notification Notification `json:"Notification"`
	Subscribers  []Subscriber `json:"Subscribers"`
}
