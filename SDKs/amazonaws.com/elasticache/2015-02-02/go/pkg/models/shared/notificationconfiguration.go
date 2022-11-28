package shared

// NotificationConfiguration
// Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
type NotificationConfiguration struct {
	TopicArn    *string
	TopicStatus *string
}
