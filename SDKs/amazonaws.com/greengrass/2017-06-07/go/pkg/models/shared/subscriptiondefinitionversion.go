package shared

// SubscriptionDefinitionVersion
// Information about a subscription definition version.
type SubscriptionDefinitionVersion struct {
	Subscriptions []Subscription `json:"Subscriptions,omitempty"`
}
