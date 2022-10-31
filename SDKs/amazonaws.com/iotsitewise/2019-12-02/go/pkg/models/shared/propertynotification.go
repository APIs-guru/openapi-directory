package shared

type PropertyNotification struct {
	State PropertyNotificationStateEnum `json:"state"`
	Topic string                        `json:"topic"`
}
