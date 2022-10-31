package shared



type NotificationWithSubscribers struct {
    Notification Notification `json:"Notification"`
    Subscribers []Subscriber `json:"Subscribers"`
    
}

