package shared

// PutRequest
// Represents a request to perform a <code>PutItem</code> operation on an item.
type PutRequest struct {
	Item map[string]AttributeValue `json:"Item"`
}
