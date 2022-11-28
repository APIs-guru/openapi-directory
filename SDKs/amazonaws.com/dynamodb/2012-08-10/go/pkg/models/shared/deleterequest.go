package shared

// DeleteRequest
// Represents a request to perform a <code>DeleteItem</code> operation on an item.
type DeleteRequest struct {
	Key map[string]AttributeValue `json:"Key"`
}
