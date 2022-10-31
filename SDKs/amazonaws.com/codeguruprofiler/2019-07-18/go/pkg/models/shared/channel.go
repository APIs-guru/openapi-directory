package shared

type Channel struct {
	EventPublishers []EventPublisherEnum `json:"eventPublishers"`
	ID              *string              `json:"id,omitempty"`
	URI             string               `json:"uri"`
}
