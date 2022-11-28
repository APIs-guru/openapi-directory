package shared

// BatchWriteItemOutput
// A container for <code>BatchWriteItem</code> response
type BatchWriteItemOutput struct {
	Responses        map[string]BatchWriteResponse `json:"Responses,omitempty"`
	UnprocessedItems map[string][]WriteRequest     `json:"UnprocessedItems,omitempty"`
}
