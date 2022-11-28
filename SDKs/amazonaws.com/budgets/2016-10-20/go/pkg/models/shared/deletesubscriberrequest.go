package shared

// DeleteSubscriberRequest
//
//	Request of DeleteSubscriber
type DeleteSubscriberRequest struct {
	AccountID    string       `json:"AccountId"`
	BudgetName   string       `json:"BudgetName"`
	Notification Notification `json:"Notification"`
	Subscriber   Subscriber   `json:"Subscriber"`
}
