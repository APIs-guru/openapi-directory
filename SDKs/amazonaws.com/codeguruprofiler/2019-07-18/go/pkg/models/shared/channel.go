package shared

type Channel struct {
	EventPublishers []EventPublisherEnum `json:"eventPublishers"`
	ID              *string              `json:"id"`
	URI             string               `json:"uri"`
}
