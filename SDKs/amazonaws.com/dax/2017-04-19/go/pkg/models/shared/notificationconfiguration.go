package shared

// NotificationConfiguration
// Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
type NotificationConfiguration struct {
	TopicArn    *string `json:"TopicArn,omitempty"`
	TopicStatus *string `json:"TopicStatus,omitempty"`
}
