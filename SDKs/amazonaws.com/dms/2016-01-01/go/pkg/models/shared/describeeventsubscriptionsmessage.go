package shared

type DescribeEventSubscriptionsMessage struct {
	Filters          []Filter `json:"Filters"`
	Marker           *string  `json:"Marker"`
	MaxRecords       *int64   `json:"MaxRecords"`
	SubscriptionName *string  `json:"SubscriptionName"`
}
