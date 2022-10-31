package shared



type ListNotificationsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Notifications []Notification `json:"notifications,omitempty"`
    
}

