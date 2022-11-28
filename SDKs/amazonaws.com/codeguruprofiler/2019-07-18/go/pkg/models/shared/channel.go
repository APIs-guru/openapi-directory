package shared

// Channel
// Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
type Channel struct {
	EventPublishers []EventPublisherEnum `json:"eventPublishers"`
	ID              *string              `json:"id,omitempty"`
	URI             string               `json:"uri"`
}
