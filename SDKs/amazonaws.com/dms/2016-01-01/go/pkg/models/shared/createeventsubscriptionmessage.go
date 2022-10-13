package shared

type CreateEventSubscriptionMessage struct {
	Enabled          *bool    `json:"Enabled"`
	EventCategories  []string `json:"EventCategories"`
	SnsTopicArn      string   `json:"SnsTopicArn"`
	SourceIds        []string `json:"SourceIds"`
	SourceType       *string  `json:"SourceType"`
	SubscriptionName string   `json:"SubscriptionName"`
	Tags             []Tag    `json:"Tags"`
}
