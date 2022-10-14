package shared

type Notification struct {
	NotificationType   NotificationTypeEnum            `json:"notificationType"`
	SlackConfiguration *SlackNotificationConfiguration `json:"slackConfiguration,omitempty"`
}
