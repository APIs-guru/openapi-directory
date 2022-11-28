package shared

// EventSubscriptionsMessage
// Represents the output of <a>DescribeEventSubscriptions</a>.
type EventSubscriptionsMessage struct {
	EventSubscriptionsList []EventSubscription
	Marker                 *string
}
