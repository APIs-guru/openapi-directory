package shared

// ItemResponse
// Details for the requested item.
type ItemResponse struct {
	Item map[string]AttributeValue `json:"Item,omitempty"`
}
