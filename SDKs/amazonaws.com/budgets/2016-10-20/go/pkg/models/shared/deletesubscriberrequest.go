package shared



type DeleteSubscriberRequest struct {
    AccountID string `json:"AccountId"`
    BudgetName string `json:"BudgetName"`
    Notification Notification `json:"Notification"`
    Subscriber Subscriber `json:"Subscriber"`
    
}

