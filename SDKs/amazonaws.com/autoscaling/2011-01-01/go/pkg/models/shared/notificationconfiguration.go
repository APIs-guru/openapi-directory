package shared

// NotificationConfiguration
// Describes a notification.
type NotificationConfiguration struct {
	AutoScalingGroupName *string
	NotificationType     *string
	TopicArn             *string
}
