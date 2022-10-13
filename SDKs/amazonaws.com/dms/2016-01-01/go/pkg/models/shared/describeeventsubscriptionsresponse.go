package shared

type DescribeEventSubscriptionsResponse struct {
	EventSubscriptionsList []EventSubscription `json:"EventSubscriptionsList"`
	Marker                 *string             `json:"Marker"`
}
