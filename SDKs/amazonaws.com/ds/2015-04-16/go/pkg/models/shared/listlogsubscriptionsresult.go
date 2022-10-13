package shared

type ListLogSubscriptionsResult struct {
	LogSubscriptions []LogSubscription `json:"LogSubscriptions"`
	NextToken        *string           `json:"NextToken"`
}
