package shared

// BatchResponse
// The item attributes from a response in a specific table, along with the read resources consumed on the table during the request.
type BatchResponse struct {
	ConsumedCapacityUnits *float64                    `json:"ConsumedCapacityUnits,omitempty"`
	Items                 []map[string]AttributeValue `json:"Items,omitempty"`
}
