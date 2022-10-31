package shared



type UpdateSubscriberRequest struct {
    AccountID string `json:"AccountId"`
    BudgetName string `json:"BudgetName"`
    NewSubscriber Subscriber `json:"NewSubscriber"`
    Notification Notification `json:"Notification"`
    OldSubscriber Subscriber `json:"OldSubscriber"`
    
}

