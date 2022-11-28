package shared

// EventSubscription
// Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation.
type EventSubscription struct {
	CustSubscriptionID       *string  `json:"CustSubscriptionId,omitempty"`
	CustomerAwsID            *string  `json:"CustomerAwsId,omitempty"`
	Enabled                  *bool    `json:"Enabled,omitempty"`
	EventCategoriesList      []string `json:"EventCategoriesList,omitempty"`
	SnsTopicArn              *string  `json:"SnsTopicArn,omitempty"`
	SourceIdsList            []string `json:"SourceIdsList,omitempty"`
	SourceType               *string  `json:"SourceType,omitempty"`
	Status                   *string  `json:"Status,omitempty"`
	SubscriptionCreationTime *string  `json:"SubscriptionCreationTime,omitempty"`
}
