package shared

// CreateSubscriberRequest
//
//	Request of CreateSubscriber
type CreateSubscriberRequest struct {
	AccountID    string       `json:"AccountId"`
	BudgetName   string       `json:"BudgetName"`
	Notification Notification `json:"Notification"`
	Subscriber   Subscriber   `json:"Subscriber"`
}
