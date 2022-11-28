package shared

// NotificationWithSubscribers
// A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
type NotificationWithSubscribers struct {
	Notification Notification `json:"Notification"`
	Subscribers  []Subscriber `json:"Subscribers"`
}
