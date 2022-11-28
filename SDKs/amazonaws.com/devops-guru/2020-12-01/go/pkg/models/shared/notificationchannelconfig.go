package shared

// NotificationChannelConfig
//
//	Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
type NotificationChannelConfig struct {
	Sns SnsChannelConfig `json:"Sns"`
}
