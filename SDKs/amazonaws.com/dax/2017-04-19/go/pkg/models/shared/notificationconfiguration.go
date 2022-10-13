package shared

type NotificationConfiguration struct {
	TopicArn    *string `json:"TopicArn"`
	TopicStatus *string `json:"TopicStatus"`
}
