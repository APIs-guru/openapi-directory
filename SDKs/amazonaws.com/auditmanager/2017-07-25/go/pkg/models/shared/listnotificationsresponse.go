package shared

type ListNotificationsResponse struct {
	NextToken     *string        `json:"nextToken"`
	Notifications []Notification `json:"notifications"`
}
