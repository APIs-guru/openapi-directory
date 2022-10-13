package shared

type ListEventSubscriptionsResponse struct {
	NextToken     *string        `json:"nextToken"`
	Subscriptions []Subscription `json:"subscriptions"`
}
