package shared

type Subscription struct {
	EventSubscriptions []EventSubscription `json:"eventSubscriptions"`
	ResourceArn        string              `json:"resourceArn"`
	TopicArn           string              `json:"topicArn"`
}
