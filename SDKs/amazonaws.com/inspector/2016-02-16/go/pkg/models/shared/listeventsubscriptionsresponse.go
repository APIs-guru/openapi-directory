package shared

type ListEventSubscriptionsResponse struct {
	NextToken     *string        `json:"nextToken,omitempty"`
	Subscriptions []Subscription `json:"subscriptions"`
}
