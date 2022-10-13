package shared

type ListNotificationChannelsResponse struct {
	Channels  []NotificationChannel `json:"Channels"`
	NextToken *string               `json:"NextToken"`
}
