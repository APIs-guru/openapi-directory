package shared

// CreateEventSubscriptionMessage
// <p/>
type CreateEventSubscriptionMessage struct {
	Enabled          *bool    `json:"Enabled,omitempty"`
	EventCategories  []string `json:"EventCategories,omitempty"`
	SnsTopicArn      string   `json:"SnsTopicArn"`
	SourceIds        []string `json:"SourceIds,omitempty"`
	SourceType       *string  `json:"SourceType,omitempty"`
	SubscriptionName string   `json:"SubscriptionName"`
	Tags             []Tag    `json:"Tags,omitempty"`
}
