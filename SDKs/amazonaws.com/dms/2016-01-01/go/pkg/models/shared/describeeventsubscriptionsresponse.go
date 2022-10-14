package shared

type DescribeEventSubscriptionsResponse struct {
	EventSubscriptionsList []EventSubscription `json:"EventSubscriptionsList,omitempty"`
	Marker                 *string             `json:"Marker,omitempty"`
}
