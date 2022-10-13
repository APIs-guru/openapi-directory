package shared

type ModifyEventSubscriptionMessage struct {
	Enabled          *bool    `json:"Enabled"`
	EventCategories  []string `json:"EventCategories"`
	SnsTopicArn      *string  `json:"SnsTopicArn"`
	SourceType       *string  `json:"SourceType"`
	SubscriptionName string   `json:"SubscriptionName"`
}
