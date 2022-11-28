package shared

// GetItemOutput
// Represents the output of a <code>GetItem</code> operation.
type GetItemOutput struct {
	ConsumedCapacity *ConsumedCapacity         `json:"ConsumedCapacity,omitempty"`
	Item             map[string]AttributeValue `json:"Item,omitempty"`
}
