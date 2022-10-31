package shared



type ListNotificationChannelsResponse struct {
    Channels []NotificationChannel `json:"Channels,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

