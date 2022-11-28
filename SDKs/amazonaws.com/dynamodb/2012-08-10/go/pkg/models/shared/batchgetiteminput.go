package shared

// BatchGetItemInput
// Represents the input of a <code>BatchGetItem</code> operation.
type BatchGetItemInput struct {
	RequestItems           map[string]KeysAndAttributes `json:"RequestItems"`
	ReturnConsumedCapacity *ReturnConsumedCapacityEnum  `json:"ReturnConsumedCapacity,omitempty"`
}
