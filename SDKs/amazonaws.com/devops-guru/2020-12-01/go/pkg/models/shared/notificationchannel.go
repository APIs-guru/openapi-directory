package shared

type NotificationChannel struct {
	Config *NotificationChannelConfig `json:"Config"`
	ID     *string                    `json:"Id"`
}
