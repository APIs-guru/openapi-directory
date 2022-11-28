package shared

// PutRequest
// A container for a Put BatchWrite request
type PutRequest struct {
	Item map[string]AttributeValue `json:"Item"`
}
