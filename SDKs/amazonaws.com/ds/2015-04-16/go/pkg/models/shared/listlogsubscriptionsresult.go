package shared



type ListLogSubscriptionsResult struct {
    LogSubscriptions []LogSubscription `json:"LogSubscriptions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

