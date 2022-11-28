package shared

// QueryOutput
// Represents the output of a <code>Query</code> operation.
type QueryOutput struct {
	ConsumedCapacity *ConsumedCapacity           `json:"ConsumedCapacity,omitempty"`
	Count            *int64                      `json:"Count,omitempty"`
	Items            []map[string]AttributeValue `json:"Items,omitempty"`
	LastEvaluatedKey map[string]AttributeValue   `json:"LastEvaluatedKey,omitempty"`
	ScannedCount     *int64                      `json:"ScannedCount,omitempty"`
}
