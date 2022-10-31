package shared

type NotificationConfiguration struct {
	TopicArn    *string `json:"TopicArn,omitempty"`
	TopicStatus *string `json:"TopicStatus,omitempty"`
}
