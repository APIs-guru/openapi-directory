package shared

type EventSubscription struct {
	CustSubscriptionID       *string  `json:"CustSubscriptionId"`
	CustomerAwsID            *string  `json:"CustomerAwsId"`
	Enabled                  *bool    `json:"Enabled"`
	EventCategoriesList      []string `json:"EventCategoriesList"`
	SnsTopicArn              *string  `json:"SnsTopicArn"`
	SourceIdsList            []string `json:"SourceIdsList"`
	SourceType               *string  `json:"SourceType"`
	Status                   *string  `json:"Status"`
	SubscriptionCreationTime *string  `json:"SubscriptionCreationTime"`
}
