package shared



type ModifyEventSubscriptionMessage struct {
    Enabled *bool `json:"Enabled,omitempty"`
    EventCategories []string `json:"EventCategories,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    SubscriptionName string `json:"SubscriptionName"`
    
}

