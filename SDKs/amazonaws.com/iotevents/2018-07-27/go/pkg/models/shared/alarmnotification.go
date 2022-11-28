package shared

// AlarmNotification
// Contains information about one or more notification actions.
type AlarmNotification struct {
	NotificationActions []NotificationAction `json:"notificationActions,omitempty"`
}
