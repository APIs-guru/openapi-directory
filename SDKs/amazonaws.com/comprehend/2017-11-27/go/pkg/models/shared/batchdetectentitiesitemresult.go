package shared

// BatchDetectEntitiesItemResult
// The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
type BatchDetectEntitiesItemResult struct {
	Entities []Entity `json:"Entities,omitempty"`
	Index    *int64   `json:"Index,omitempty"`
}
