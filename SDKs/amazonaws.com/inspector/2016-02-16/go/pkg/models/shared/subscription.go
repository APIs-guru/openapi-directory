package shared

// Subscription
// This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
type Subscription struct {
	EventSubscriptions []EventSubscription `json:"eventSubscriptions"`
	ResourceArn        string              `json:"resourceArn"`
	TopicArn           string              `json:"topicArn"`
}
