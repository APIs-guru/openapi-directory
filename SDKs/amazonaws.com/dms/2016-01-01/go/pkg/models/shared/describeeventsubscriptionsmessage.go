package shared

type DescribeEventSubscriptionsMessage struct {
	Filters          []Filter `json:"Filters,omitempty"`
	Marker           *string  `json:"Marker,omitempty"`
	MaxRecords       *int64   `json:"MaxRecords,omitempty"`
	SubscriptionName *string  `json:"SubscriptionName,omitempty"`
}
