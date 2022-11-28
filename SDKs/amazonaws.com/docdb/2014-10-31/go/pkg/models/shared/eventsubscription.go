package shared

// EventSubscription
// Detailed information about an event to which you have subscribed.
type EventSubscription struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []string
	EventSubscriptionArn     *string
	SnsTopicArn              *string
	SourceIdsList            []string
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *string
}
