package shared

// Subscription
// Information about a subscription.
type Subscription struct {
	ID      string `json:"Id"`
	Source  string `json:"Source"`
	Subject string `json:"Subject"`
	Target  string `json:"Target"`
}
