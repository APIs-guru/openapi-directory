package shared

type DescribeSubscribersForNotificationResponse struct {
	NextToken   *string      `json:"NextToken"`
	Subscribers []Subscriber `json:"Subscribers"`
}
